const Connection = require('../../database/connection')

module.exports = async (req) => {
    
  try {
    var username = req.body.username;
    
    const query = `select count(*) as count from tbl_user where username =  '${username}'`;
              
    
    const results = await Connection(query)

    return results

  } catch (err) {
    return false
  }
}