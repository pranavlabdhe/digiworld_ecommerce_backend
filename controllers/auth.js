const User = require('../models/user')
exports.createOrUpdateUser = async(req,res)=>{
    // authCheck func. in middleware always runs first that's why req.user is available and can be accessed
    const {email} = req.user;
    let name= email.split('@')[0];
    console.log(name);
    const user = await User.findOneAndUpdate({email},{name:name},{new:true})
    if(user){
        console.log('updated user',user);
        res.json(user)
    }else{
        const newUser = await new User({email,name}).save();
        res.json(newUser)
        console.log('user created',newUser);
    }
};
exports.currentUser = async (req,res)=>{
    User.findOne({email:req.user.email}).exec((err,user)=>{
        if(err) throw new Error(err)
        res.json(user)
    })
}