
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


const verifyUserAccount = require('../../services/accounts/verifyAccount');


dotenv.config({path: './.env'})

const secretKey = process.env.JWT_SECRET

router.post(`/verification`, async (req, res) => {
  
    try {
    
        const UserAccountVerifcation = await verifyUserAccount(req) 
        
        if (UserAccountVerifcation) {
            if(UserAccountVerifcation.length === 0){
                
                res.status(401).json({ message: 'Invalid credentials' });
            }
            else{
                const savedHashedPassword = UserAccountVerifcation[0].password; // Retrieve hashed password from your database 
                const password = req.body.password;

                const isMatch = await bcrypt.compare(password, savedHashedPassword);
                if(isMatch){
                    
                    const user = UserAccountVerifcation[0].username;

                    /*** Generate a JWT token */ 
                    jwt.sign({ user }, secretKey, { expiresIn: '1h' }, (err, token) => {
                        if (err) {
                          res.status(500).json({ error: 'Failed to generate token' });
                        } 
                        else {
                           /***Send the token to the client  */ 
                                res
                                    .status(200)
                                    .json({
                                        token,
                                        message: 'Login successful'
                                    });
                        }

                    });

                }
                else{
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            }
        }
        else{
             res
            .status(500)
            .send({
              status: UserAccountVerifcation,
              message: "Internal Server Error"
            })
        }


     
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  
    
    
});
  


module.exports = router