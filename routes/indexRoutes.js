const express = require('express');
const router = express();
const productSchema = require('../models/product-model');
const islogeedin = require('../middlewares/isLoggedIn');

router.get("/", function (req, res) {
    let error = req.flash("error");
    let message = req.flash("message")
    res.render("index", { message,error, loggedin: false });
  });

router.get('/shop' , islogeedin , async function(req,res){
  let products = await productSchema.find();
  res.render('shop', {products});
})

router.get('/cart/:userid' , islogeedin , (req,res)=>{
  res.render('cart');
});

module.exports = router;