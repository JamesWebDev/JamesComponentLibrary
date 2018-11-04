const fs = require('fs-extra');
const path = require('path');

const distPath = path.normalize(`${__dirname}/../dist/`);
const packageJsonPath = path.normalize(`${__dirname}/../package.json`);
const indexJsPath = path.normalize(`${__dirname}/../index.js`);


try {
    fs.copySync(packageJsonPath, distPath+path.basename(packageJsonPath));
    console.log(`Copied ${packageJsonPath} => ${distPath+path.basename(packageJsonPath)}`);
    fs.copySync(indexJsPath, distPath+path.basename(indexJsPath));
    console.log(`Copied ${indexJsPath} => ${distPath+path.basename(indexJsPath)}`);
} catch (err) {
    console.error(err);
}