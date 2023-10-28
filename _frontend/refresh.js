const util = require("util");
const { exec } = require("child_process");
const { emptyDir, copy, move } = require("fs-extra");
const path = require("path");

const execAsync = util.promisify(exec);
const emptyDirAsync = util.promisify(emptyDir);
const copyAsync = util.promisify(copy);
const moveAsync = util.promisify(move);

const symfonyRootDir = path.resolve(__dirname, "../");
const reactBuildDir = path.resolve(__dirname, "build");
const symfonyReactDir = path.resolve(__dirname, "../public");
const indexPath = path.join(symfonyReactDir, "index.php");

(async function () {
  try {
    await execAsync("php bin/console cache:clear", { cwd: symfonyRootDir });
    await execAsync("php bin/console cache:warmup --env=dev", {
      cwd: symfonyRootDir,
    });
    await copyAsync(indexPath, path.resolve(__dirname, "index.php.temp"));
    await emptyDirAsync(symfonyReactDir);
    await copyAsync(reactBuildDir, symfonyReactDir);
    await moveAsync(path.resolve(__dirname, "index.php.temp"), indexPath);
  } catch (err) {
    console.error("Error on refresh script:", err.message);
  }
})();
