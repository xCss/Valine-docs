const {
  relative: pathRelative,
  resolve: pathResolve,
  join: pathJoin,
} = require("path");

// If this file is moved, this should be updated! That's why it's at the top.
function getParentDirectory() {
  return pathResolve(__dirname, "..");
}

const shelljs = require("shelljs");

const { existsSync } = require("fs");
const assert = require("assert");
const {
  themeName,
} = require("./utils.js");

class ThemeInstance {
  constructor(options = {}) {
    console.log(options)
    console.log("Preparing to use:");
    console.log("  configPackage:", options.configPackage);
    console.log("  configDirectory:", options.configDirectory);
    console.log("  themeDirectory:", options.themeDirectory);
    this.options = options;
  }
  async _prepare() {
    // Only prepare once.
    if (this._prepared) {
      return;
    }

    // We're not prepared to do this later, rigth now.
    this._prepared = true;

    // Once per instantiation should be fine.
    this._parentDir = getParentDirectory();

    // Work in the parent directory, for npm mainly.
    shelljs.cd(this._parentDir);

    const skipPackageJsons = "--no-package-lock --no-save";

    // Install theme and configuration package, but don't save the
    // changes, as that would cause local (and unnecessary) changes to the
    // package.json and package-lock.json files.
    //
    // NOTE: Due to a 'bug?' in npm (https://github.com/npm/npm/issues/17927),
    // the use of any other `npm install` commands after this will cause
    // these two packages to be removed!

    function installNpmPackages (...packages) {
      const toInstall = packages.join(" ");
      const code = shelljs.exec(
        `npm install ${skipPackageJsons} ${toInstall}`).code;

      assert.strictEqual(code, 0,
        "An error occurred installing npm packages for the 'theme-example'.");
    }

    function linkNpmPackages (...dirs) {
      const toInstall = dirs.join(" ");
      const code = shelljs.exec(
        `npm install --link ${skipPackageJsons} ${toInstall}`).code;

      assert.strictEqual(code, 0,
        "An error occurred installing npm packages for the 'theme-example'.");
    }

    const {
      configPackage,
      configDirectory,
      themeDirectory,
    } = this.options;

    const defaultConfigYml = (dir) => pathJoin(dir, "_config.yml");

    // let configPath;
    // if (configPackage && !configDirectory && !themeDirectory) {
    //   installNpmPackages(configPackage, themeName);
    //   configPath = defaultConfigYml(pathJoin("node_modules", configPackage));
    // } else if (configPackage && !configDirectory) {
    //   installNpmPackages(configPackage);
    //   configPath = defaultConfigYml(pathJoin("node_modules", configPackage));
    // } else if (configDirectory && !themeDirectory) {
    //   installNpmPackages(themeName);
    //   configPath = require(pathResolve(this._parentDir, configDirectory));
    // } else if (configDirectory) {
    //   linkNpmPackages(themeDirectory);
    //   configPath = require(pathResolve(this._parentDir, configDirectory));
    // }

    let configPath = require(pathResolve(this._parentDir, '../meteor-hexo-config'));

    // Make sure that the config package we've just used has exposed a
    // _config.yml in the expected location.
    assert.strictEqual(typeof configPath, "string",
      "The configPath doesn't seem to exist due to misconfiguration.");

    assert.ok(
      existsSync(pathResolve(".", configPath)),
      "The _config.yml couldn't be found at: " + configPath);

    this.configPath = configPath;
  }

  async _hexoCmdWithConfigs(cmd = "generate") {
    await this._prepare();

    assert.strictEqual(typeof this.configPath, "string",
      "The configPath isn't set.  This indicates the prepare failed.");

    const configsToUse = [];

    // Include the configuration theme.
    configsToUse.push(this.configPath);

    // Always include the root _config.yml from the deployment which is
    // consuming the theme.  In this case, theme-example/_config.yml.
    configsToUse.push("_config.yml");

    // If there is a theme directory override, use it last.
    if (this.configPathTheme) {
      configsToUse.push(this.configPathTheme);
    }

    const relativeConfigs = configsToUse.map(configPath => {
      const relativePath = pathRelative(this._parentDir, configPath);
      assert.ok(existsSync(relativePath),
        "Config couldn't be found at: " + relativePath);
      return relativePath;
    });

    const hexoCmd = `npx hexo ${cmd} --config "${relativeConfigs.join(",")}"`;
    console.log(hexoCmd)
    shelljs.cd(this._parentDir);
    shelljs.env.FORCE_COLOR = true;
    return shelljs.exec(hexoCmd);
  }

  async generate() {
    const result = await this._hexoCmdWithConfigs("generate")

    if (result.code !== 0 || result.stderr) {
      throw new Error("The theme generation failed." + result.stderr);
    }
  }

  async server() {
    const result = await this._hexoCmdWithConfigs("server")

    if (result.code !== 0 || result.stderr) {
      throw new Error("The theme generation failed." + result.stderr);
    }
  }
}

module.exports = ThemeInstance;
