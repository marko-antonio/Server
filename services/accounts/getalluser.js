const Connection = require('../../database/connection')


module.exports = async (fields) => {
  try {
    const query = `SELECT
	id,
	username,
	firstname,
	middlename,
	lastname,
	email,
	STATUS,
	createdon,
	lastmodified 
FROM
	tbl_user`
    
    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}