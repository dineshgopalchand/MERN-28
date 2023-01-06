const http = require("http");
const fs = require("fs");
const formidable = require('formidable');
const path= require('path');

const { logEvent } = require('./event');

const PORT = 8000;
const HOST = `http://localhost:${PORT}`;

const app = http.createServer((req, res) => {
  return logEvent.emit('logPage', req.url);
  const { url, method } = req;
  const { pathname, searchParams } = new URL(HOST + url);
  res.setHeader("Content-type", "text/html");
  res.setHeader("status", 201);
  if (pathname == "/") {
    const homePageContent = fs.readFile('./public/html/index.html', (err, data) => {
      res.end(data);
    });

  } else
    if (pathname == "/user-info") {
      res.setHeader("Content-type", "application/json");
      const data = {
        name: 'dinesh',
        location: 'BLR'
      };
      res.end(JSON.stringify(data));

    } else if (pathname == "/contact") {
      let body = '';
      if (method == 'POST') {
        req.on('data', chunk => {
          body += chunk.toString();
        })
        // const body=request.body;
        req.on('end', () => {
          console.log(body);
          console.log('post methode content');
          res.end(`
        <h2>post method</h2>
        Submitted Value=${body}
        `);
        })

      } else {
        console.log('GET methode content', searchParams);
        const fname = searchParams.get('fname');
        console.log(fname)
        fs.readFile('./public/html/contact.html', (err, data) => {
          res.end(data);
        });
      }
    } else if (pathname == "/about") {
      res.end("<h2>About page</h2>");
    } else if (pathname == "/blog") {
      res.end("<h2>Blog page</h2>");
    } else
      if (pathname == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.filepath;
          var newpath = path.join(__dirname,'uploads', files.filetoupload.originalFilename);
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
        });
      } else
        if (pathname == '/profile-form') {

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
          res.write('<input type="file" name="filetoupload"><br>');
          res.write('<input type="submit">');
          res.write('</form>');
          return res.end();
        } else {
          res.end("<h2>404</h2>");
        }
});
app.listen(PORT, () => {
  console.log(`Server started : ${HOST}`);
});
