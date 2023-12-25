// FS Async Module
//Async will have callback function
const fs = require("fs");
console.log("start");
const firstFile = fs.readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./Content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    //console.log(first, second);
    fs.writeFile(
      "./Content/AsyncRandom.txt",
      `This is random File ${first} , ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Data has been written to file`);
      }
    );
  });
});
console.log("starting next task");
