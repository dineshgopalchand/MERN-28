const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/list', (req, res) => {
    const { p: page, c: count, q: search } = (req.query);
    let rawdata = fs.readFileSync('./mock-data/product-list.json');
    const productList = JSON.parse(rawdata);
    let filteredProductList = productList.products;
    if (search) {
        filteredProductList = filteredProductList
            .filter(product => product.title.toLowerCase().indexOf(search.toLowerCase()) != -1)
    }
    if (page && count) {
        const start = (page - 1) * count;
        const end = start + count;
        filteredProductList = filteredProductList.slice(start, end)
    }
    res.send(filteredProductList);
});
router.get('/:productid', (req, res) => {

    const { productid } = req.params;

    let rawdata = fs.readFileSync('./mock-data/product-list.json');
    const productList = JSON.parse(rawdata);
    const productDetail = productList.products.filter(p => p.id == productid)[0];
    res.send(productDetail);
});

module.exports = router;