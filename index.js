const express = require('express');
const path = require('path')
const app = express();
var cors = require("cors");
const moment = require('moment');
const mysql = require('mysql2');



const PORT = process.env.PORT || 5010;

app.listen(PORT,()=>{
    console.log('Server is started in port ' + PORT);
});


const connection = mysql.createConnection({
    host: 'localhost',
    user:'admin',
    password: '@Dmin_3214',
    database: 'csdr_is',
    port: '3306'

});

//for Cors
app.use(cors());

connection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/api/user',(req,res)=>{

    connection.query('SELECT * FROM csdr_is.user',(err,rows,fields) =>{
        if(err) throw err
        res.json(rows);
    });
});