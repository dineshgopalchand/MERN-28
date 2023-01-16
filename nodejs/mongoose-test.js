const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/ecommerce';

mongoose.set('strictQuery', true);
const Schema = mongoose.Schema;
const productSchema = new Schema({
    _id: Schema.ObjectId,
    id: Number,
    title: String,
    description: String,
    price: Number,
    author: String
});
const ProductModel = mongoose.model('product', productSchema);

mongoose.connect(url, () => {
    console.log('connection established');
});
async function getAllProducts() {
    // const productList = await ProductModel.find({});
    const productList = await ProductModel.aggregate([
        {
            $project: {
                description: 0
            }
        },
        {
            $match: {
                title: {
                    $regex: /iPhone/
                }
            }
        }
    ]);
    console.log(productList);
}
getAllProducts();

async function createNewProducts() {
    const newProduct = new ProductModel({
        _id: mongoose.Types.ObjectId(),
        id: 2222,
        description: 'some description',
        title: "Dummy product",
        price: 202
    })
    const createdRes = await newProduct.save();
    console.log(createdRes);
}
// createNewProducts()


// 63c56d0646043782d096166b  - remove
// 63c56c07ec3e135e9e25dea4  --id : 2224

async function deleteProduct(filter = { id: -1 }) {
    // const deleteStatus = await ProductModel.deleteMany(filter)
    const deleteStatus = await ProductModel.deleteOne(filter)
    console.log(deleteStatus);

}

// deleteProduct({id:3})

async function updateProducts(id, newUpdateValue) {
    // const deleteStatus = await ProductModel.deleteMany(filter)
    const updateStatus = await ProductModel.updateOne({
        _id: id
    }, newUpdateValue)
    console.log(updateStatus);

}
updateProducts('63c57375dc569bf8642dc93c', {
    title: 'OPPOF19-Test',
    author: 'din3eish'
});


