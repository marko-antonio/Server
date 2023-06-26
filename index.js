const express = require('express');
const twilio = require('twilio');
const app = express();
const moment = require('moment');






var cors = require("cors");
const PORT = process.env.PORT || 5010;

app.listen(PORT,()=>{
    console.log('Server is started in port ' + PORT);
});


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

//for Cors
app.use(cors({
    origin:["http://localhost"],
    methods:["POST","GET"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));



/** --------------------------------- Routes ---------------------------------*/

const accountsRoute = require('./routes/test/accounts'); // for testing


/* Verification  */
const TokenVerficationRoute = require('./routes/verifyToken/TokenVerification');


/*Registration*/
const Registration = require('./routes/accounts/registration.js'); 




/** --------------------------------- API Link ---------------------------------*/

app.use('/api', accountsRoute); // for testing


/*Registration*/
app.use('/API/VerifyToken', TokenVerficationRoute);

/** Registration */
app.use('/crdis/registration', Registration);


