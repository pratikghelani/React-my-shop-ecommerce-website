const { products } = require ("./constance/products.js");
const Product  = require ("./model/productSchema.js");

const defaultdata = async () =>{
try{
    // await Product.deleteMany({});
    // await Product.insertMany(products);
    console.log('Data inset SucessFully');
}catch(error){
    console.log('Error : ', error.message);
}

}
module.exports = defaultdata;
