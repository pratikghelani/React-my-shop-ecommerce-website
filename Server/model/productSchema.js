const mongoose= require( 'mongoose');

const productSchema = mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    dis:Number,
    rate:Number,
    count:Number,

});

const product = mongoose.model('product', productSchema);

module.exports = product;