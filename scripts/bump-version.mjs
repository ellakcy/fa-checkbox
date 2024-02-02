import inquirer  from 'inquirer';
import * as fs from 'fs';
import semver from 'semver';

async function flushInputBuffer() {
  return new Promise(resolve => {
    process.stdin.resume();
    process.stdin.on('data', resolve);
  });
}

async function getVersionBumpChoices(currentVersion) {

  const versionChoices = ['patch', 'minor', 'major','none'];

  const messages = {
    'patch': "Patch (Bug fixes)",
    'minor': "Minor (New features)",
    'major': "Major (Breaking changes)",
    'none':  "Keep Same"
  }

  // Generate choice objects with custom messages based on the current version
  const choices = versionChoices.map((bumpType) => {

    if(bumpType == 'none'){
      return {
        name: messages[bumpType],
        value: 'none'
      }
    }
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

  await flushInputBuffer();
  
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

  if(versionType == 'none'){
    console.log("No version selected skipping bump");
    process.exit(0)
  }
  // Bump the version
  packageJson.version = versionType;

  // Write the updated package.json
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  console.log(`Version bumped to ${versionType}`);
}

bumpVersion().then(() => process.exit(0));