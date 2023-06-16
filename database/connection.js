const mysql = require('mysql2')
const dotenv = require('dotenv');

dotenv.config({path: './.env'})
const dbConfig = {

        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE,
        port: process.env.DATABASE_PORT

}

const db = mysql.createPool(dbConfig)

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, sql) => {
      if (err) {
        console.log("Database error: ", err)
        reject(err)
      } else {
        sql.query(query, (err, results) => {
          if (err) {
            console.log("Query error: ", err)
            reject(err)
          } else {
            resolve(results)
          }

          sql.release()
        })
      }
    })
  })
}