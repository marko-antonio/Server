const Connection = require('../../database/connection')

module.exports = async (req) => {
    
  try {
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var middlename = req.body.middlename;
    var lastname = req.body.lastname;
    var email = req.body.email;

    const query = `INSERT INTO csdr_is.tbl_user `+
                `(username, password, firstname, middlename, lastname, email, status, createdon, lastmodified) `+ 
                `VALUES ('${username}', '${password}', '${firstname}', '${middlename}', '${lastname}','${email}',0,now(),now())`;
              
  

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}