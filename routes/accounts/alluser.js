const express = require('express')
const router = express.Router();
const dotenv = require('dotenv');


dotenv.config({path: './.env'})



const Retrievealluser = require('../../services/accounts/getalluser');

router.get(`/all`, async (req, res) => {

    try{
      
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
        
    }
    catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
   
    
});

  
module.exports = router