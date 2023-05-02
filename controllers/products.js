let express = require('express');

let productRouter = express.Router();

function router(menu){
    productRouter.route('/').get((req,res)=>{
        // res.send('This is product Route');
        res.render('products',{menu})
    })
    
    productRouter.route('/details').get((req,res)=>{
        res.send('This is product Details Route');
    })
    return productRouter
}




module.exports = router