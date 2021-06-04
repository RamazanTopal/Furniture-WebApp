const express = require('express')
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');



const app = express()
const port = 3000;
//route
const pageRoute=require('./routes/pageRoute')
const adminRoute=require('./routes/adminRoute')
const productRoute=require('./routes/productRoute')
const accountRoute=require('./routes/accountRoute')
//middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//template engine
app.set('view engine','ejs');
//global variable
global.userIN=null;
//session
app.use(session({
  secret: 'passwordkeyword',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/FurnitureApp' })
}))
//mongoose
mongoose.connect('mongodb://localhost/FurnitureApp',
 {
   useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex:true

});

app.use('*',(req,res,next)=>{
  userIN=req.session.userID;
  next();
})
app.use('/', pageRoute);
app.use('/admin', adminRoute);
app.use('/product', productRoute);
app.use('/user', accountRoute);

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`)
})