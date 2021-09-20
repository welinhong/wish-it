const fs = require('fs')

module.exports = {
  '**/*.(ts|tsx)': (stagedFilenames) => {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'))
    tsconfig.include = stagedFilenames
    fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig))
    return 'tsc --noEmit --project tsconfig.lint.json'
  },

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': ['npx eslint --fix', 'npx prettier --write'],

  // Format MarkDown and JSON
  '**/*.(md|json)': 'npx prettier --write',
}
