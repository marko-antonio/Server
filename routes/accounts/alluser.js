const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config({path: './.env'})

const secretKey = process.env.JWT_SECRET


const Retrievealluser = require('../../services/accounts/getalluser');

router.get(`/all`, async (req, res) => {

    try{
        // var result = 0;
        // jwt.verify(req.token, secretKey, (error, authData) => {
        //     if (error) {
        //       res.status(403).json({ message: 'Invalid token' });
        //       result = 0;
        //     } 
            
        //     else {
        //        result = 1;
        //     }
        // });

        // if (result == 1){
                const { fields } = req.query
      
                const results = await Retrievealluser(fields)
            
                if (results) {
                res
                    .status(200)
                    .send(results)
                } else {
                res
                    .status(500)
                    .send({
                    status: results,
                    message: "Not Retrieved!"
                    })
                }
        // }
        
    }
    catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
   
    
});

  
module.exports = router