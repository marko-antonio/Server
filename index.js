const express = require('express');
const twilio = require('twilio');
const app = express();
const moment = require('moment');
const dotenv = require('dotenv');




var cors = require("cors");
const PORT = process.env.PORT || 5010;

app.listen(PORT,()=>{
    console.log('Server is started in port ' + PORT);
});

/********************** Twilio Sms Noti ***************************************/
//for testing of sms noti
// const accountSid = '';
// const authToken = '';

// async function sendSMS(){
//     const client =  new twilio(accountSid,authToken)

//     return client.messages
//         .create({
//             body: 'Hello from J, This is for testing',
//             to: '+639072634219', // Text your number
//             from: '+14302305151', // From a valid Twilio number
//         })
//         .then((message) => console.log(message, "Message Sent"))
//         .catch(err =>console.log(err));
// }

// sendSMS();

/************************************ Cors **********************************/
app.use(cors({
    // origin:["http://localhost"],
    methods:["POST","GET"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/** ----------------------------------- Middleware to verify the token ----------------------------*/

dotenv.config({path: './.env'})

const secretKey = process.env.JWT_SECRET

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
      next();
    } 
    else {
      res.status(403).json({ error: 'Unauthorized' });
    }
}

/** --------------------------------- Routes ---------------------------------*/

const accountsRoute = require('./routes/test/accounts'); // for testing


/* Verification  */
const TokenVerficationRoute = require('./routes/verifyToken/TokenVerification');


/*Registration*/
const Registration = require('./routes/accounts/registration.js'); 


/*Login*/
const Login = require('./routes/accounts/login.js'); 


/*get All User*/
const AllUser = require('./routes/accounts/alluser.js'); 

/** --------------------------------- API Link ---------------------------------*/


/************************ For Testing **************************************/
app.use('/api', accountsRoute); // for testing


/*Registration*/
app.use('/API/VerifyToken', TokenVerficationRoute); // for testing of Token

/**************************************************************************/


/** Registration */
app.use('/crdis/registration', Registration);


/** Login */
app.use('/crdis/login', Login);


/** Get All User */
app.use('/crdis/users', verifyToken, AllUser);


