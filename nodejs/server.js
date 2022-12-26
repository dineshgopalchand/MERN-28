const http = require("http");
const fs = require("fs");
const PORT = 8000;
const app = http.createServer((request, response) => {
  const { url, method } = request;
  console.log({ url, method });
  response.setHeader("Content-type", "text/html");
  response.setHeader("status", 201);
  if (url == "/") {
    const homePageContent=fs.readFile('./public/html/index.html',(err,data)=>{
        response.end(data);
    });

    
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
