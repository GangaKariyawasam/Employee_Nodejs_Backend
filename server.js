require('./model/db.js')

const express = require('express');
const path = require('path');
const exphrs = require('express-handlebars');
const bodyParser = require('body-parser')

const employeeController = require('./controller/employeeController')

var app =express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphrs({extname: 'hbs',defaultLayout: 'mainLayout',layoutsDir: __dirname+'/views/layouts/'}));

app.listen(3000,()=>{
    console.log('Express srever started at port: 3000')
})

app.use('/employee',employeeController);
