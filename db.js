const db = require('mongoose');

db.Promise = global.Promise;

const connect = async (url) => {
  await db.connect(url, { useNewUrlParser: true });
  console.log('[DB] Successfully conected');
};

module.exports = connect;
