const { promisify } = require("util");
const writeFile = promisify(require("fs").writeFile);
const {
  join: pathJoin,
} = require("path");

const tmp = require("tmp-promise");
const yaml = require("js-yaml");

const defaultConfigNpm = "meteor-hexo-config";
const themeName = "meteor-theme-hexo";

function getConfigFromArguments(cmd = "generate") {
  const prefix = `npm run ${cmd} -- `;
  const argv =
    require("yargs")
      .usage(`Usage: ${prefix} --config-dir ../path --theme-dir ../path`)
      .usage(`       ${prefix} --config-pkg <node-pkg> --theme-dir ../path`)
      .usage(`       ${prefix} --config-pkg <node-pkg>`)
      .option("p", {
        alias: "config-package",
        description: "A config package to be used and automatically installed.",
      })
      .option("d", {
        alias: "config-dir",
        description: "A directory (as an alternative to a package) for config.",
      })
      .option("t", {
        alias: "theme-dir",
        description: "A directory of a theme to use, rather than the default."
      })
      .argv;

  const options = Object.create(null);

  // Backcompat.  Remove January 2019.
  if (argv._.length) {
    if (argv._.length !== 1) {
      throw new Error("Invalid number of arguments.  See --help.");
    }

    options.configPackage = argv._[0];
  }

  if (argv["config-dir"]) {
    options.configDirectory = argv["config-dir"];
  } else if (argv["config-pkg"]) {
    options.configPackage = argv["config-pkg"];
  }

  if (argv["theme-dir"]) {
    options.themeDirectory = argv["theme-dir"];
  }

  return options;
}

module.exports = {
  defaultConfigNpm,
  getConfigFromArguments,
  themeName,

};
