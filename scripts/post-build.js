const fs = require('fs');
const path = require('path');

// Create .nojekyll file in the out directory
const nojekyllPath = path.join(__dirname, '..', 'out', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file for GitHub Pages');
