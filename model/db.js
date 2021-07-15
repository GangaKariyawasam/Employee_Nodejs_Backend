
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeedb',{useNewUrlParser:true},(error)=>{
    if (!error){console.log('MongoDB connection Succeeded')}
    else {console.log('Error in DB connection: '+error)}
});

require('./employee.model')
