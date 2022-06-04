require('dotenv').config();

const config = {
  user: process.env.USER,
  pasword: process.env.PASWORD,
  db_name: process.env.DB_NAME,
};

module.exports = config;
