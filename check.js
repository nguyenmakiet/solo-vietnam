const fs = require('fs');
const path = require('path');

const locDir = './data/locations';
const files = fs.readdirSync(locDir).filter(f => f.endsWith('.ts'));

let emptyGallery = [];
let skipped = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(locDir, file), 'utf8');
  
  if (/status:\s*['\"](unverified|closed)['\"]/. test(content)) {
    skipped.push(file);
    continue;
  }
  
  if (/gallery:\s*\[\s*\]/.test(content) || !/gallery:/.test(content)) {
    emptyGallery.push(file.replace('.ts', ''));
  }
}

console.log('=== LOCATIONS THIẾU ẢNH ===');
console.log('Total:', emptyGallery.length);
console.log('');
emptyGallery.forEach((n, i) => console.log((i+1) + '. ' + n));
console.log('');
console.log('Skipped unverified/closed:', skipped.length);