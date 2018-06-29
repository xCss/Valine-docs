const assert = require("assert");
const { promisify } = require("util");
const exists = promisify(require("fs").exists);
const lstat = promisify(require("fs").lstat);
const mkdtemp = promisify(require("fs").mkdtemp);
const rename = promisify(require("fs").rename);
const symlink = promisify(require("fs").symlink);
const unlink = promisify(require("fs").unlink);
const writeFile = promisify(require("fs").writeFile);

const copy = promisify(require("fs-extra").copy);
const remove = promisify(require("fs-extra").remove);

const tmp = require("tmp-promise");
const yaml = require("js-yaml");

const {
  join: pathJoin,
  relative: pathRelative,
} = require("path");

function determineConfigsToTest() {
  if (process.argv.length > 3 || process.argv.length < 2) {
    throw new Error("Invalid number of arguments. Either pass the npm " +
      "containing the name of the theme config, or pass nothing for default. " +
      "(e.g. meteor-hexo-config, apollo-hexo-config, etc.)");
  }

  const toTest = [];

  if (process.argv[2]) {
    toTest.push(process.argv[2]);
  }

  require("./configsToTest.json")
    .forEach(config => toTest.push(config));

  if (! toTest.length) {
    toTest.push("meteor-hexo-config");
  }

  return toTest;
}

async function generateWithRepo({ dirTheme, repoPath, configPackage, dirOut }) {
  const git = require("simple-git/promise");
  const shelljs = require("shelljs");

  console.log("Processing test config for: " + configPackage);

  // Wipe any local changes in our repository clean, aggressively.
  // It's a temporary directory, so nothing that we need to worry about.
  await git(repoPath).checkout(".");
  await git(repoPath).raw(["clean", "-d", "-f", "-n", "-x"]);
  shelljs.cd(repoPath);

  // Install dependencies _and_ our additional configuration package.
  assert.strictEqual(
    shelljs.exec(`npm install -D ${configPackage}`).code,
    0,
    `An error occurred while installing the '${configPackage}' npm package.`);

  // Make the symlink, rather than using npm install --link.
  await symlink(
    dirTheme,
    pathJoin("node_modules", "meteor-theme-hexo"));

  // This is the expected path to the _config.yml in the config package.
  const configPath = pathJoin("node_modules", configPackage, "_config.yml");

  // These should all be relative to the current directory.
  const configFiles = [];

  // Make sure that the config package we've just installed has exposed a
  // _config.yml in the expected location.
  assert.ok(
    await exists(configPath),
    "The _config.yml couldn't be found at: " + configPath);
  configFiles.push(configPath);

  assert.ok(
    await exists("_config.yml"),
    "The test theme's _config.yml was not found.");
  configFiles.push("_config.yml");

  const additionalConfigPath = "_theme_test_additional.yml";

  await writeFile(additionalConfigPath, yaml.safeDump({
    public_dir: pathRelative(process.cwd(), dirOut),
    root: "/" + configPackage,
  }));

  // Add our special config overrides onto the array of configs to be used
  // by the Hexo generation script.
  configFiles.push(additionalConfigPath);

  // Run the hexo generation with all of our desired configs.
  const resultHexoGenerate =
    shelljs.exec(`npx hexo generate --config "${configFiles.join(',')}"`);

  if (resultHexoGenerate.code !== 0 || resultHexoGenerate.stderr) {
    throw new Error("The theme generation failed." +
      resultHexoGenerate.stderr);
  }
}

async function putInPlace(source, dest) {
  // We'll try to do this as atomically as possible.
  // Symlinks might have been another way to go here, but Netlify doesn't
  // support symlinks for the public directory to publish (likely due to
  // Go preventing it by default to avoid cycles).

  const makeTempDir = () => mkdtemp(pathJoin(dest, "..", ".temp-"));
  const tempDest = await makeTempDir();

  await copy(source, tempDest);

  // If we need to move an old directory out of the way, use a temp
  const tempOld = await exists(dest) && await makeTempDir();
  if (tempOld) {
    await rename(dest, tempOld);
  }

  await rename(tempDest, dest);

  // We don't need to wait for the old directory to get removed.
  if (tempOld) {
    remove(tempOld);
  }
}

async function writeFileIndex(configFiles, destinationPath) {
  const makeLink = (file) => `<a class="push_button blue" href="${file}">${file}</a>`;
  const links = configFiles.map(makeLink).join("\n");

  // Thanks, https://1stwebdesigner.com/free-code-snippets-css-buttons/.
  const output = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        html{
            background:#f0f0f0;
            padding:20px;
        }

        body {
            width: 250px;
            margin: 0 auto;
        }

        .push_button {
          position: relative;
          width:220px;
          height:40px;
          text-align:center;
          color:#FFF;
          text-decoration:none;
          line-height:43px;
          font-family:'Oswald', Helvetica;
          display: block;
          margin: 30px;
        }
        .push_button:before {
          background:#f0f0f0;
          background-image:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#D0D0D0), to(#f0f0f0));

          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;

          -webkit-box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF;
          -moz-box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF;
          box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF;

          position: absolute;
          content: "";
          left: -6px; right: -6px;
          top: -6px; bottom: -10px;
          z-index: -1;
        }

        .push_button:active {
          -webkit-box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset;
          top:5px;
        }
        .push_button:active:before{
          top: -11px;
          bottom: -5px;
          content: "";
        }

        .blue {
          text-shadow:-1px -1px 0 #2C7982;
          background: #3EACBA;
          border:1px solid #379AA4;
          background-image:-webkit-linear-gradient(top, #48C6D4, #3EACBA);
          background-image:-moz-linear-gradient(top, #48C6D4, #3EACBA);
          background-image:-ms-linear-gradient(top, #48C6D4, #3EACBA);
          background-image:-o-linear-gradient(top, #48C6D4, #3EACBA);
          background-image:linear-gradient(top, #48C6D4, #3EACBA);

          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;

          -webkit-box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
          -moz-box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
          box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
        }

        .blue:hover {
          background: #48C6D4;
          background-image:-webkit-linear-gradient(top, #3EACBA, #48C6D4);
          background-image:-moz-linear-gradient(top, #3EACBA, #48C6D4);
          background-image:-ms-linear-gradient(top, #3EACBA, #48C6D4);
          background-image:-o-linear-gradient(top, #3EACBA, #48C6D4);
          background-image:linear-gradient(top, #3EACBA, #48C6D4);
        }
      </style>
    </head>
    <body>
      ${links}
    </body>
    </html>
  `;

  await writeFile(destinationPath, output);
}

async function initiateTheme(repo) {
  const git = require("simple-git/promise");

  const tempDirHandle = await tmp.dir();
  await git().clone(repo, tempDirHandle.path);
  return tempDirHandle;
}

module.exports = {
  determineConfigsToTest,
  generateWithRepo,
  initiateTheme,
  putInPlace,
  writeFileIndex,
};