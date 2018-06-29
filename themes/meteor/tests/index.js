const { promisify } = require("util");
const {
  resolve: pathResolve,
  join: pathJoin,
} = require("path");
const remove = promisify(require("fs-extra").remove);

const {
  determineConfigsToTest,
  generateWithRepo,
  initiateTheme,
  putInPlace,
  writeFileIndex,
} = require("./utils.js");

const tmp = require("tmp-promise");

const gitRepoTestTheme = "https://github.com/meteor/theme-example.git";

const result = (async function main() {
  const dirTheme = pathResolve(__dirname, "..");
  const configPackages = determineConfigsToTest();

  const dirOutRootHandle = await tmp.dir();
  const dirOutRoot = dirOutRootHandle.path;
  const dirPublic = pathResolve(__dirname, "public");

  console.log(
    `Running tests for the config package: ${configPackages.join(',')}`);

  // We'll establish a temporary directory for the repository which we're
  // going to clone.  This will be used for a base for each successive
  // hexo generation, though the directory will be thoroughly cleaned
  // before each run.
  const tempThemeDirHandle = await initiateTheme(gitRepoTestTheme);
  const tempThemeDirPath = tempThemeDirHandle.path;

  // For each config we're configured to test, generate the docs using
  // the test theme as a base.  The results will end up in `dirOutRoot`,
  // with one folder for each configuration.
  for (const configPackage of configPackages) {
    // The generated content should go into a subdirectory.
    const dirOut = pathJoin(dirOutRoot, configPackage);

    await generateWithRepo({
      dirTheme,
      repoPath: tempThemeDirPath,
      configPackage,
      dirOut,
    });
  }

  // Make a _very_ simple index.html page which links to the subdirectories.
  await writeFileIndex(configPackages, pathJoin(dirOutRoot, "index.html"));

  await putInPlace(dirOutRoot, dirPublic);

  console.log("Cleaning up...");
  await remove(tempThemeDirPath);
  await remove(dirOutRoot);

  console.log(`Done.  Output is in ${dirPublic}.`);
})();
