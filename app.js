const express = require('express');
let app = express();
let port = 3000;

app.set('views','./views')
app.set('view engine','ejs')

let menu=[
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'},
]

const categoryRouter = require('./controllers/categories')(menu);
const productRouter = require('./controllers/products')(menu)

//routes

app.get('/',function(req,res){
    //res.send('This is the default Route');
    res.render('title',{title:'This is the home page',menu})
})
// app.get('/category',function(req,res){
//     res.send('This is category route')
// })
// app.get('/products',function(req,res){
//     res.send('This is products route')
// })

app.use('/category',categoryRouter);
app.use('/products',productRouter)

//create server
app.listen(port,function(err){
    if(err) throw err;
    console.log('server listening on port 3000')
})