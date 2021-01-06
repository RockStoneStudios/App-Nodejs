const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-mongo')
.then(db=> console.log("Db Connected")).catch(err=>console.log(err));

const PORT = process.env.PORT||3000;

const indexRoutes = require('./Routes/index');

//Settings
app.set('views',path.join(__dirname,'Views'));

app.set('view engine','ejs');


//Middlewares

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

app.use('/',indexRoutes);

app.listen(PORT,()=>{
    console.log("Starting port "+PORT+"....");
})