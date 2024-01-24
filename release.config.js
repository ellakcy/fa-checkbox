module.exports = {
  branches: [
    'master',
    {
      'name':'dev',
      'prerelease':true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/git",
      {
        "assets": [
          "package.json", 
          'dist/*',
          "scss/*",
          'README.md'
        ],
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github',
  ],
};