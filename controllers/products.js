let express = require('express');

let productRouter = express();

productRouter.route('/').get((req,res)=>{
    res.send('This is product Route');
})

productRouter.route('/details').get((req,res)=>{
    res.send('This is product Details Route');
})

module.exports = productRouter