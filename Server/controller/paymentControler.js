const catchAsyncError = require('../middleware/catchAsyncError');
const doenv = require('dotenv');
const stripe =  require('stripe')(process.env.STRIPE_SECRET);

// Srripe Api Key
exports.peocessPayment = catchAsyncError(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.totalRS,
        currency : 'INR',
        metadata: {
            company: 'Ecommerce'
        },
    });

    await stripe.paymentIntents.create({
        amount: req.body.totalRS,
        currency : 'INR',
        metadata: {
            company: 'Ecommerce'
        },
    }).then((myPayment) => {
        res.status(200).json({ success: true, client_secret: myPayment.client_secret });
    }).catch((e) => {
        res.status(400).json({ success: false, message: e.message });
    })
});

// Stripe Secret Key
// exports.sendStripeApiKey = catchAsyncError(async (req, res, next) => {
//     res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KET });
// });

