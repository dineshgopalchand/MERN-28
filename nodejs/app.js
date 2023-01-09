const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8001;
const HOST = `http://localhost:${PORT}`;
const fs = require('fs');
const morgan = require('morgan');
const path= require('path');

const productRoute = require('./router/product');
const contactRoute = require('./router/contact');
const postRoute = require('./router/post');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// morgan middleware
// app.use(morgan(function (tokens, req, res) {
//     return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens.res(req, res, 'content-length'), '-',
//         tokens['response-time'](req, res), 'ms'
//     ].join(' ')
// }));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'));

app.use(express.static('public/html'));
// app.use(express.static('public/images'));
app.use('/assests/images', express.static(path.join(__dirname, 'public/images')))

app.use('/product', productRoute);
app.use('/contact', contactRoute);
app.use('/post', postRoute);
app.get('/', (req, res) => {
    console.log(req.somedata);
    res.send('<h1>Home page</h1>');
});
app.all('*',(req,res)=>{
    res.status(404);
    res.send('<h1>404 - Opsss.....</h1>');
})


app.listen(PORT, () => {
    console.log(`Server started : ${HOST}`);
});

