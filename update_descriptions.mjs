import fs from 'fs';

const csv = fs.readFileSync('Product Name and Descriptions_custom_extraction_all.csv', 'utf-8');

function parseCSV(text) {
  let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
  for (l of text) {
      if ('"' === l) {
          if (s && l === p) row[i] += l;
          s = !s;
      } else if (',' === l && s) l = row[++i] = '';
      else if ('\n' === l && s) {
          if ('\r' === p) row[i] = row[i].slice(0, -1);
          row = ret[++r] = [l = '']; i = 0;
      } else row[i] += l;
      p = l;
  }
  return ret;
}

const parsed = parseCSV(csv);
const descriptions = {};
for (let i = 1; i < parsed.length; i++) {
  if (parsed[i].length >= 3) {
    const name = parsed[i][1];
    const desc = parsed[i][2];
    if (name && desc) {
      descriptions[name.trim()] = desc.trim();
    }
  }
}

let ts = fs.readFileSync('lib/products.ts', 'utf-8');

for (const [name, desc] of Object.entries(descriptions)) {
  const safeDesc = desc.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const regex = new RegExp(`name:\\s*"${name}",([\\s\\S]*?)longDescription:\\s*(["\`])[\\s\\S]*?\\2,`, 'g');
  ts = ts.replace(regex, `name: "${name}",$1longDescription: \`${safeDesc}\`,`);
}

fs.writeFileSync('lib/products.ts', ts);
console.log('Descriptions updated successfully.');
