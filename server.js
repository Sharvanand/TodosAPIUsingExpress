const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const todosRoutes = require('./routes/todos');
const port   = 3000;


const app = express();

// Middlewares go here...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/todos', todosRoutes);



app.get('/',function(req, res){
    res.send("Hello World");
});

app.listen(port, function(){
    console.log("App is running on port 3000");
    
});
