const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //res.write("welcome to Homepage");
    res.end("welcome to Homepage");
    return;
  }
  if (req.url === "/about") {
    //res.write("this is about section");
    res.end("this is about section");
    return;
  }
  //res.write(`<h1>Oops! something went wrong </h1>`);
  res.end(`<h1>Oops! something went wrong </h1>
  <p>Please Go Back to Homepage</p>
  <a href="http://localhost:5000/">Homepage</a>`);
});
server.listen(5000);
