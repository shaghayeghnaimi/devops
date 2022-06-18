const mysql2 = require("mysql2/promise");

let pool = null;
module.exports = {
  init: async function () {
    pool = mysql2.createPool({
      host: "127.0.0.1",
      user: "root",
      database: "Packages",
      password: "329500",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  },
  query: async function (q) {
    return await pool.query(q);
  },
};
