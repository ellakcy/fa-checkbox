#!/bin/bash

# Read the current version from package.json
current_version=$(npm run version -s)

echo "Current version: $current_version"

patch_version=$(npx semver $current_version -i patch)
minor_version=$(npx semver $current_version -i minor)
major_version=$(npx semver $current_version -i major)

# Choose the version bump type
PS3="Select the version bump type: "
select bump_type in "patch - Bump into ${patch_version}" "minor - Bump into ${minor_version}" "major - Bump into ${major_version}" "none - Keep Same"; do

  case $bump_type in
    "patch"*)
      # Increment version based on the chosen bump type
      new_version="patch"
      break
      ;;
    "minor"*)
        new_version="minor"
        break
        ;;
    "major"*)
        new_version="major"
        break
        ;;
    "none"*)
      echo "No version selected, skipping bump."
      exit 0
      ;;
    *)
      echo "Invalid selection, please choose a valid option."
      ;;
  esac
done

echo "Bumping version to $new_version"

# Update package.json with the new version
new_version=$(npm version ${new_version} --force --silent)

echo "Version bumped to $new_version"
