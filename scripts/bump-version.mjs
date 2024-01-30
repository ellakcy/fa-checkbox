import inquirer  from 'inquirer';
import * as fs from 'fs';
import semver from 'semver';

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
  const newVersion = semver.inc(packageJson.version, versionType);
  packageJson.version = newVersion;

  // Write the updated package.json
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  console.log(`Version bumped to ${newVersion}`);
}

bumpVersion();