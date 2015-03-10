var fs = require('fs');

// Reads the entrie contents of a file.
fs.readFile("./index.html", {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;
  parseFileContents(data);
});

// The entry function of content parsing.
function parseFileContents(contents) {
  
}