const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'extension', 'index.html');

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(
    '<meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>',
    '<meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="styles.css">'
  );

  fs.writeFile(filePath, result, 'utf8', function(err) {
    if (err) return console.log(err);
  });
});