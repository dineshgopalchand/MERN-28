const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8001;
const HOST = `http://localhost:${PORT}`;
const fs = require('fs');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// custom middleware
app.use((req, res, next) => {
    console.log('logging', req.url);
    res.setHeader('requested-by', 'dinesh');
    res.cookie('name','diosjdfj')
    if(req.url=='/'){
        req.somedata='MERN class';
    }
    next();
})

app.get('/', (req, res) => {
    console.log(req.somedata);
    res.send('<h1>Home page</h1>');
})
app.get('/post', (req, res) => {
    const data = {
        postname: 'MERN demand'
    };
    res.send(data);
});
app.get('/product-list', (req, res) => {
    console.log(req.somedata);
    let rawdata = fs.readFileSync('./mock-data/product-list.json');
    const productList = JSON.parse(rawdata);
    res.send(productList);
});
app.get('/contact', (req, res) => {
    res.send(`
    <h2>Contact page</h2>
    <form method="post">
        <input type="text" name="name" placeholder="Enter name"/>
        <button>Submit</button>
    </form>
    `);
});
app.post('/contact', (req, res) => {
    let body = req.body;
    const formattedBody = `
    <h2>Thank you for submitting form</h2>
    <p> Submitted name : ${body.name}</p> 
    `
    res.send(formattedBody);
})


app.listen(PORT, () => {
    console.log(`Server started : ${HOST}`);
});

