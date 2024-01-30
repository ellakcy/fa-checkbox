import inquirer  from 'inquirer';
import * as fs from 'fs';
import semver from 'semver';


async function getVersionBumpChoices(currentVersion) {

  const versionChoices = ['patch', 'minor', 'major'];

  const messages = {
    'patch': "Patch (Bug fixes)",
    'minor': "Minor (New features)",
    'major': "Major (Breaking changes)" 
  }

  // Generate choice objects with custom messages based on the current version
  const choices = versionChoices.map((bumpType) => {

    const bumpedVersion = semver.inc(currentVersion, bumpType);
    
    return {
      name: `${messages[bumpType]}  -> ${bumpedVersion}`,
      value: bumpedVersion,
    };

  });

  return choices;
}

async function bumpVersion() {
  // Read package.json
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  console.log(`Current version ${packageJson.version}`)

  const choices = await getVersionBumpChoices(packageJson.version);
  // Ask the user for the new version
  const { versionType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'versionType',
      message: 'Select the version bump type:',
      choices: choices,
    },
  ]);

  // Bump the version
  packageJson.version = versionType;

  // Write the updated package.json
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  console.log(`Version bumped to ${versionType}`);
}

bumpVersion();