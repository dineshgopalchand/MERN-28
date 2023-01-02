const http = require("http");
const fs = require("fs");
const PORT = 8000;
const HOST = `http://localhost:${PORT}`;
const app = http.createServer((request, response) => {
  const { url, method } = request;
  const { pathname, searchParams } = new URL(HOST + url);
  response.setHeader("Content-type", "text/html");
  response.setHeader("status", 201);
  if (pathname == "/") {
    const homePageContent = fs.readFile('./public/html/index.html', (err, data) => {
      response.end(data);
    });

  } else if (pathname == "/contact") {
    let body='';
    if (method == 'POST') {
      request.on('data',chunk=>{
        body+=chunk.toString();
      })
      // const body=request.body;
      request.on('end',()=>{
        console.log(body);
        console.log('post methode content');
        response.end(`
        <h2>post method</h2>
        Submitted Value=${body}
        `);
      })
     
    } else {
      console.log('GET methode content',searchParams);
      const fname=searchParams.get('fname');
      console.log(fname)
      fs.readFile('./public/html/contact.html', (err, data) => {
        response.end(data);
      });
    }
  } else if (pathname == "/about") {
    response.end("<h2>About page</h2>");
  } else if (pathname == "/blog") {
    response.end("<h2>Blog page</h2>");
  } else {
    response.end("<h2>404</h2>");
  }
});
app.listen(PORT, () => {
  console.log(`Server started : ${HOST}`);
});
