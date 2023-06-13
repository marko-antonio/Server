const Connection = require('../../database/connection')


module.exports = async (fields) => {
  try {
    const query = `SELECT * FROM csdr_is.user`
    
    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}