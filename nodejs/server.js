const http = require("http");
const PORT = 8000;
const app = http.createServer((request, response) => {
  const { url, method } = request;
  console.log({ url, method });
  response.setHeader("Content-type", "text/html");
  if (url == "/") {
    response.end("<h2>Home page</h2>");
  } else if (url == "/contact") {
    response.end("<h2>Contact page</h2>");
  } else if (url == "/about") {
    response.end("<h2>About page</h2>");
  } else if (url == "/blog") {
    response.end("<h2>Blog page</h2>");
  } else {
    response.end("<h2>404</h2>");
  }
});
app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
