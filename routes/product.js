// const express = require('express');
// //controllers
// const { create,read,update,remove,list } = require('../controllers/category');

// const router = express.Router()
// //middlewares
// const { authCheck,adminCheck } =require('../middlewares/auth')



// router.post('/category',authCheck,adminCheck,create);

// router.get('/categories',list);

// router.get('/category/:slug',authCheck,adminCheck,read);

// router.put('/category/:slug',authCheck,adminCheck,update);

// router.delete('/category/:slug',authCheck,adminCheck,remove)

// module.exports = router


const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create,listAll,remove,read, update,list,productsCount,productStar,listRelated,searchFilters } = require("../controllers/product")

// routes
router.post("/product", authCheck, adminCheck, create)
router.get('/products/total',productsCount)
router.get("/products/:count", listAll) //no.of products

router.delete("/product/:slug",authCheck,adminCheck,remove)
router.get("/product/:slug",read)
router.put("/product/:slug",authCheck,adminCheck,update)
router.post('/products',list)
// rating 

router.put('/product/star/:productId',authCheck,productStar)

//related
router.get('/product/related/:productId',listRelated)

router.post("/search/filters",searchFilters)


module.exports = router;