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
        "message": "Release: ${nextRelease.version} [skip ci]"
      }
    ],
    '@semantic-release/github',
  ],
};