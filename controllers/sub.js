const SubCategory = require('../models/sub')
const slugify = require('slugify')
const Product = require('../models/product')
exports.create = async (req,res) =>{
    try {
        const { name,parent } = req.body;
        const sub = await new SubCategory({name,parent,slug:slugify(name)}).save();
        res.json(sub);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            data:'Something went wrong while creating'
        })
    }
}

exports.list = async (req,res) =>{
    res.json(await SubCategory.find({}).sort({createdAt:-1}).exec());
}

exports.read = async (req,res) =>{
    let sub = await SubCategory.findOne({slug:req.params.slug}).exec();
    const products = await Product.find({subs:sub})
    .populate('category')
    .exec();
    res.json({sub,products})
}

exports.update = async (req, res) => {
    const { name,parent } = req.body;
    try {
      const updated = await SubCategory.findOneAndUpdate(
        { slug: req.params.slug },
        { name,parent,slug: slugify(name) },
        { new: true }
      );
      res.json(updated);
    } catch (err) {
      res.status(400).send("Sub update failed");
    }
  };


exports.remove = async (req,res) =>{
    try {
        const deleted = await SubCategory.findOneAndDelete({slug:req.params.slug})
        res.json(deleted)
    } catch (error) {
        console.log(error);
        res.status(400).send("subcategory delete failed")
    }
}
