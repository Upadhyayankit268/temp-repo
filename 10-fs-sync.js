//FS Sync Module
const fs = require("fs");
console.log("starting task");
const readFile = fs.readFileSync("./Content/first.txt", { encoding: "utf8" });
const readFile2 = fs.readFileSync("./Content/second.txt", { encoding: "utf8" });
const randomFile = fs.writeFileSync(
  "./Content/random.txt",
  `This is random File ${readFile} , ${readFile2} `,
  //if flag a then it will append
  { flag: "a" }
);
console.log("done with task");
console.log("moving to next task");
