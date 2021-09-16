module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': 'npx tsc --noEmit --jsx preserve',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': ['npx eslint --fix', 'npx prettier --write'],

  // Format MarkDown and JSON
  '**/*.(md|json)': 'npx prettier --write',
}
