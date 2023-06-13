const Connection = require('../../database/connection')

module.exports = async (req) => {
    
  try {
    var username = req.body.username;
    var password = req.body.password;
    var first_name = req.body.first_name;
    var mid_name = req.body.mid_name;
    var last_name = req.body.last_name;
    var ext_name = req.body.ext_name;
    var email = req.body.email;
    var contact = req.body.contact;
    var access_level = req.body.access_level;
    var account_status = req.body.account_status;

    const query = `INSERT INTO csdr_is.user `+
                `(username, password, first_name, mid_name, last_name, ext_name, email, contact, access_level, account_status) `+ 
                `VALUES ('${username}', '${password}', '${first_name}', '${mid_name}', '${last_name}', '${ext_name}.', '${email}', '${contact}', '${access_level}', '${account_status}')`;
              
  

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}