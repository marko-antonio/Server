const Connection = require('../../database/connection')

module.exports = async (req) => {
    
  try {
    var id = req.body.id;
    var status = req.body.status;
    var user_type = req.body.user_type;

              
    const query =  `UPDATE csdr_is.tbl_user SET  status = '${status}', user_type = '${user_type}', lastmodified = now() WHERE id = '${id}'`;

  

    await Connection(query)

    return true
  } 
  catch (err) {
    return false
  }
}