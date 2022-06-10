const express= require("express");
const {userSingup, userLogin}  = require("../controller/user-controller.js");
const {getProducts, getProductById, addProducts, updateProduct, deleteProduct} = require("../controller/product-controller");
const { adminsLogin } = require('../controller/adminsController');
const {newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder, deleteOrder} = require("../controller/orderController");
const { peocessPayment} = require('../controller/paymentControler');
const {userAuthication} = require('../utils/userauth');
const { adminAuthocation } = require('../utils/adminAuthication')

const router = express.Router();

//Sign Up Api
router.post('/signup', userSingup);
//Login Api
router.post('/login', userLogin);
//Admin Api
router.post('/admin', adminsLogin);

// get All Product
router.get('/products', getProducts);

// get Product Details
router.get('/product/:id', getProductById);
// get order+
router.post('/order/new', newOrder);
router.get('/order/getSingleOrder?:id', getSingleOrder);
router.get('/order/me/:id', myOrder);
// Payment
router.post('/process/payment', peocessPayment);
// Stripe Api key
// router.get('/stripeapikey', sendStripeApiKey);
// Admin
router.post('/adminLogin',  adminsLogin);
    // Admin Add Product Api
    router.post('/addProduct', addProducts);
    router.put('/updateProduct', updateProduct);
    router.post('/deleteProduct', deleteProduct) // Delete Api
    // Admin Orde Api
    router.get('/admin/orders', getAllOrders);
    router.put('/order/update/:id', updateOrder);
    router.post('/order/delete/:id', deleteOrder); // Delete Api
module.exports = router;
//sayMine.com