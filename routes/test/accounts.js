const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your own secret key
const RetrieveService = require('../../services/test/get');
const CreateService = require('../../services/test/add');
const VerifyServices = require('../../services/test/verifyaccount')

router.get(`/user`, async (req, res) => {
    const { fields } = req.query
  
    const results = await RetrieveService(fields)
  
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
});

router.post(`/create`, async (req, res) => {

  try {
    const saltRounds = 3;
    const password = req.body.password;

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    req.body.password = await bcrypt.hash(password, salt);

        const results = await CreateService(req)
        if (results) {
          res
            .status(200)
            .send({
              status: results,
              message: "Successfully Created!"
            })
        } else {
          res
            .status(500)
            .send({
              status: results,
              message: "Not Created!"
            })
        }
  }
  catch (error) {
    // Handle bcrypt error
    console.error('Error during bcrypt operation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  
});

router.post(`/VerifyAccount`, async (req, res) => {

    const results = await VerifyServices(req) // verify if usename is Existing
     
        if (results) {
            if(results.length === 0){
              
              res
              .send({
                message: "Invalid Credentials"
              })
            }
            else{
              try {
                const savedHashedPassword = results[0].password; // Retrieve hashed password from your database 
                const password = req.body.password;
                
                
                // Compare the provided password with the stored hashed password
                const isMatch = await bcrypt.compare(password, savedHashedPassword);
                if(isMatch){

                  const user =results[0].username;
                    // Generate a JWT token
                      jwt.sign({ user }, secretKey, { expiresIn: '1h' }, (err, token) => {
                        if (err) {
                          res.status(500).json({ error: 'Failed to generate token' });
                        } else {
                          // Send the token to the client
                          
                          res.json({ 
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
              catch (error) {
                // Handle bcrypt error
                console.error('Error during bcrypt operation:', error);
                res.status(500).json({ error: 'Internal server error' });
              }

            }
        } 
        else {
          res
            .status(500)
            .send({
              status: results,
              message: "Internal Error"
            })
        }

});


  
module.exports = router