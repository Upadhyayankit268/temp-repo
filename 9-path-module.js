//Path Module
const path = require("path");
console.log(path.sep);
const dirname = path.dirname("/foo/bar/baz/asdf/quux");
console.log(dirname);
const filePath = path.join("/Content", "SubFolder", "test.txt");
console.log(filePath);
const basename = path.basename(filePath);
console.log(basename);

//Absolute Path
const absolute = path.resolve(__dirname, "Content", "SubFolder", "test.txt");
console.log(absolute);
