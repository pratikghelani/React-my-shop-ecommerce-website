const orderSave = require('../model/orderSchema');
const Product = require('../model/productSchema');
const ErrorHander = require('../utils/errorhandler');
const catchAsyncError = require('../middleware/catchAsyncError');

// Create new user
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {  shippingInfo, orderItems, paymentInfo, paidAt, iteamsPrice, taxPrice, shippingPrice, totalPrice, userId }  = req.body;

    // console.log(paymentInfo);
    const order = await orderSave.create({  shippingInfo, orderItems, paymentInfo, paidAt, iteamsPrice, taxPrice, shippingPrice, totalPrice, paidAt:Date.now(), userId });
    // user: req.data._id
    // console.log(userId);
    res.status(201).json({
        success: true,
        order,
    });
});

// Get Single User ---> Show order only Logged in user
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const order = await orderSave.find({userId:id});

    if(!order){
        return next(new ErrorHander("Order is not Found Without Id", 404));
    }
    res.status(200).json({
        success: true,
        order,
    });
});

// get logged in user Orders ---> Show order by OrderId Params
exports.myOrder = catchAsyncError(async (req, res, next) =>{
    const { id } = req.params;
    const orders = await orderSave.findById(id);

    res.status(200).json({
        success: true,
        orders,
    });
});


// Get All Orders -- Admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
    try{
        const orders = await orderSave.find();
        let totalAmount = 0;

        orders.forEach((order) => {
            totalAmount += order.totalPrice;
        });
        res.status(200).json({
            success: true,
            orders,
        });
    } catch(error) {
        res.status(400).json('Get all Order is not Working');
        console.log('Error :','Get all Order is not Working',error);
    }
});


// Update order Status

async function updateStock (id, quntity){
    const product = await Product.findById(id);
    // product.Stock -= quntity;
    // await product.save({ validateBeforeSave: false });
}

exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const orders = await orderSave.findById(id);

    if(orders.orderStatus === "Delivered"){
        return next(new ErrorHander('You have already delivered this order', 400));
    }

    orders.orderItems.forEach(async (order) => {
        await updateStock(order.product, order.quntity);
    });

    orders.orderStatus = req.body.status;

    if(req.body.status === 'Delivered'){
        orders.deliveredAt = Date.now();
    }
    await orders.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
});


// Delete order -- Admin
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const orders = await orderSave.findById(id);

    if (!orders){
        return next(new ErrorHander('Order not Font with this Id', 404));
    }
    await orders.remove();
    res.status(200).json({
        success: true,
    });
});