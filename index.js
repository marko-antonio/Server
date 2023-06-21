const express = require('express');
const app = express();
var cors = require("cors");
const moment = require('moment');


const PORT = process.env.PORT || 5010;

app.listen(PORT,()=>{
    console.log('Server is started in port ' + PORT);
});



//for Cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


/* Routes */
const accountsRoute = require('./routes/test/accounts')

app.use('/api', accountsRoute);
