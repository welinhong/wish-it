module.exports = {
  '**/*.(ts|tsx)': 'bash -c tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': ['npx eslint --fix', 'npx prettier --write'],

  // Format MarkDown and JSON
  '**/*.(md|json)': 'npx prettier --write',
}
