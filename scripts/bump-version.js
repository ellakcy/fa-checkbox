const inquirer = require('inquirer');
const fs = require('fs');

async function bumpVersion() {
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  // Ask the user for the new version
  const { versionType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'versionType',
      message: 'Select the version bump type:',
      choices: ['patch', 'minor', 'major'],
    },
  ]);

  // Bump the version
  const newVersion = require('semver').inc(packageJson.version, versionType);
  packageJson.version = newVersion;

  // Write the updated package.json
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  console.log(`Version bumped to ${newVersion}`);
}

bumpVersion();