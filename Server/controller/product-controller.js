const Product = require('../model/productSchema')

const getProducts = async (req, res) => {

    try{
        const product = await Product.find({});
        res.json(product);
    }   catch (error){
        status: false,
            console.log('Error :', error.message);
    }
}

const getProductById = async (req, res) => {
    try{
        const productId = await Product.findOne({'_id': req.params.id});
        res.json(productId);
    }catch(error){
        status: false,
            console.log('Error :', error.message);
    }
}

const addProducts = async (req, res) => {
    try {
        const addProduct = await Product.insertMany({
            id: req.body.id,
            title: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image,
            dis: req.body.dis,
        });
        res.json({addProduct});
    }catch (error) {
        status: false,
            console.log('Error :', error.message);
    }
}

const updateProduct = async (req,res) => {
    try {
        const id = req.body.id
        if(id){
            const updateProducts = await Product.updateOne({id},{
                id,
                title: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image,
                dis: req.body.dis,
            });
            res.json({updateProduct});
        }
        else{
            return res.json({
                status:500,
                message: 'Id is not Exists on Product Update Time'
            })
        }
    } catch (error) {
        status: false,
            console.log('Error :', error.message);
    }
}

const deleteProduct = async (req, res) => {

    const id = req.body.id;
    console.log(req,' body is Working,');
    console.log(id, 'is Working');
    try{
        if(id){
            const deleteProducts = await Product.deleteOne({id},{});
            res.json({deleteProducts});
        }
        else{
            return res.json({
                status: 500,
                message: 'Id is not Exists on Product Delete Time'
            });
        }

    }catch (error) {
        status: false;
        console.log('Error :',error.message);
    }
}

module.exports = { getProducts, getProductById, addProducts, updateProduct, deleteProduct }