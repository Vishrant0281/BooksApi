const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const bodyParser = require('body-parser');

//connection to mongodb
mongoose.connect("mongodb+srv://vrank:Vrank_2001@cluster0.5hxvx.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    () => {
        const app = express();
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,() =>{
            console.log("server started..!!");
        })
    }
);