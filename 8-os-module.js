const os = require("os");

//info about current user
const user = os.userInfo();

//Method return System uptime in sec
const uptime = os.uptime();
console.log(uptime);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
