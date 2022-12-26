const http = require("http");
const PORT = 8000;
const app = http.createServer((request, response) => {
  response.setHeader("Content-type", "text/html");
  response.end("Hello world");
});
app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
