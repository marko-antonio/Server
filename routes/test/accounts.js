const express = require('express')
const router = express.Router()


const RetrieveService = require('../../services/test/get');
const CreateService = require('../../services/test/add');

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
});

  
module.exports = router