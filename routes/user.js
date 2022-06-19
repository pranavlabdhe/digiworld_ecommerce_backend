const express = require('express')

const { authCheck } = require('../middlewares/auth')
//controller 
const {userCart,getUserCart,saveAddress,createOrder,emptyCart,orders} = require('../controllers/user')

const router = express.Router()

router.post('/user/cart',authCheck,userCart) //save cart
router.get('/user/cart',authCheck,getUserCart)//get cart
router.get('/user/orders',authCheck,orders)
router.delete('/user/cart',authCheck,emptyCart)//empty cart
router.post('/user/address',authCheck,saveAddress)



router.post('/user/order',authCheck,createOrder);
module.exports = router
