/**
 * This script executes before "npm install"
 * Lock the version of Node running based on the one set in the package.json
 */

const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const requiredNodeVersion = packageJson.engines.node;
const projectName = packageJson.name

const runningNodeVersion = process.version;

// set .nvmrc and .node_version to have the same version

fs.writeFileSync(path.join(__dirname, '..', '.node-version'), requiredNodeVersion, 'UTF8');
fs.writeFileSync(path.join(__dirname, '..', '.nvmrc'), requiredNodeVersion, 'UTF8');

// check that the required version of Node is running

if (!runningNodeVersion.split('.')[0].includes(requiredNodeVersion)) {
  console.error(`
            Current Node version is ${runningNodeVersion}, ${projectName} requires ${requiredNodeVersion}.
            If you have installed NVM and AVN, just exit the project folder and cd into it again.
            `);

  // kill the process if the required node version is not the one running
  process.exit(1);
}
