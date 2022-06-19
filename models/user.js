const mongoose = require('mongoose') 
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true
    },
    name:{
        type:String,
    },
    role:{
        type:String,
        default:'subscriber'
    },
    cart:{
        type:Array,
        default:[]
    },
    profilePhoto:{
        type:String,
        default:"https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1654757193~hmac=37f7c0bea7fcd0c8a3ad76277c09ea70"
        
    },
    address:String,
    // wishList:[{type:ObjectId,ref:"Product"}]
     //ObjectId will be the Product id from database    
},
{timestamps:true} 

)

module.exports = mongoose.model('User',userSchema)
