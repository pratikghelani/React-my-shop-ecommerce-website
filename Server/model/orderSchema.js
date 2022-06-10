const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
        pinCode: {
            type: Number,
            require: true
        },
        phoneNo: { type: Number,
            require: true
        },
    },

    orderItems : [
        {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true,
            },
            quntity: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required: true,
            },
        },
    ],

    paymentInfo:{
        id:{
            type: String,
            required: true,
        },
        status:{
            type: String,
            required: true,
        },
    },

    paidAt: {
        type: Date,
        required: true,
    },

    iteamsPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    taxPrice: {
        type: Number,
        required: true,
    },

    shippingPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    totalPrice: {
        type: Number,
        default: 0,
        required: true,
    },

    orderStatus: {
        type: String,
        required: true,
        default: 'Processing',
    },

    deliveredAt: Date,

    createAt: {
        type: Date,
        default: Date.now,
    },

    userId: {
        type: String,
        required: true,
    },

    // email: {
    //     type: String,
    //     required: true,
    // },
    
});

const orderSave = mongoose.model('ordersaves', orderSchema);

module.exports = orderSave;