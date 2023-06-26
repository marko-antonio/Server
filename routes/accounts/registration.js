
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const RegisterAccount = require('../../services/accounts/registration');
const checkUsername = require('../../services/accounts/checkusername');


router.post(`/create`, async (req, res) => {
  
    try {
      const resultsCheckUserName = await checkUsername(req)
      if(resultsCheckUserName){
          if(resultsCheckUserName[0].count >= 1){
            res
                    .status(200)
                    .send({
                      status: resultsCheckUserName,
                      message: "The username you entered is already in use."
                    })
          }

          else{
           
               const saltRounds = 3;
              const password = req.body.password;
              const salt = await bcrypt.genSalt(saltRounds);
              req.body.password = await bcrypt.hash(password, salt);
          
                  const results = await RegisterAccount(req)
                  if (results) {
                    res
                      .status(200)
                      .send({
                        status: results,
                        message: "Successfully Created!"
                      })
                  } 
                  else {
                    res
                      .status(500)
                      .send({
                        status: results,
                        message: "Not Created!"
                      })
                  }
          }
      }
      else{
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
      }




     
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  
    
    
});
  


module.exports = router