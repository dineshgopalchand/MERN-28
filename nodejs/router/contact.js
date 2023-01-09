const express = require('express');
const fs = require('fs');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send(`
    <h2>Contact page</h2>
    <form method="post">
        <input type="text" name="name" placeholder="Enter name"/>
        <button>Submit</button>
    </form>
    `);
    }).post((req, res) => {
        let body = req.body;
        const formattedBody = `
    <h2>Thank you for submitting form</h2>
    <p> Submitted name : ${body.name}</p> 
    `
        res.send(formattedBody);
    })
module.exports = router;