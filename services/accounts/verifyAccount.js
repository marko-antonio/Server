const Connection = require('../../database/connection')

module.exports = async (req) => {
    
  try {
    var username = req.body.username;

    const query = `SELECT id,username,password  FROM tbl_user WHERE username = ` +
                `'${username}'`;
              
  

    const result = await Connection(query)

    return result
  } catch (err) {
    return false
  }
}