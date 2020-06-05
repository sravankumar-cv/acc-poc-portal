var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var cors=require('cors');
var router=require('./route/route.js');
const myRequestLogger=require('./util/requestLogger');
const myErrorLogger = require('./util/errorLogger');

const PORT=8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(myRequestLogger)
app.use('/uploads',express.static('uploads'));
app.use('/',router);
app.use(myErrorLogger)

app.listen(PORT,(err)=>{
    if(!err)
    console.log('server started on port ',PORT);
    else 
        console.log(err);
});
