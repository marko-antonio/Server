const express = require('express')
const router = express.Router();
const dotenv = require('dotenv');


dotenv.config({path: './.env'});


const verifyUserAccount = require('../../services/accounts/changeStatus');

/********************** Email testing ***************************************/
// success
// let mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth:{
//         user:"mjpili016@gmail.com",
//         pass:"xrqxniatwwxumtkg"
//     }
// })

// let details = {
//     from: "mjpili016@gmail.com",
//     to: "markpili011@gmail.com",
//     subject: "testing our nodemailer",
//     text: "testing out first sender"
// }

// mailTransporter.sendMail(details,(err)=>{
//     console.log("dumaan")
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success")
//     }
// })


router.get(`/status`, async (req, res) => {

    try {

        const UserAccountStatus = await verifyUserAccount(req) 

        if (UserAccountStatus) {
            res
            .status(200)
            .send({
              status: UserAccountStatus,
              message: "Successful"
            })
        }

       
        else{

            res
           .status(500)
           .send({
             status: UserAccountStatus,
             message: "Internal Server Error"
           })
       }

    }

    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }



});


module.exports = router