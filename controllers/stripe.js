const User = require('../models/user')
const cart = require('../models/cart')
const Product = require('../models/product')
const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.createPaymentIntent = async(req,res)=>{
    const user = await User.findOne({email:req.user.email}).exec()

    const { cartTotal } = await cart.findOne({orderdBy:user._id}).exec();

    console.log('CART total',cartTotal);



    const paymentIntent = await stripe.paymentIntents.create({
        amount:cartTotal*100,
        currency:'inr'
    });
    res.send({
        clientSecret:paymentIntent.client_secret,
    })
}

