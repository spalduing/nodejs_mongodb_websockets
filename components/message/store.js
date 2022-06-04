const db = require('mongoose');

const Model = require('./model');

const config = require('../../network/config');

db.Promise = global.Promise;
const uri = `mongodb+srv://${config.user}:${config.pasword}@cluster0.nxuer.mongodb.net/${config.db_name}`;

db.connect(uri, { useNewUrlParser: true });
console.log('[DB] Successfully conected');

// const messages = [];

async function addMessage(message) {
  //   messages.push(message);
  const myMessage = new Model(message);
  await myMessage.save();
}

async function getMessages() {
  //   return messages;
  const messages = await Model.find();
  return messages;
}

async function updateMesages(id, message) {
  const myMessage = await Model.findById(id);
  myMessage.message = message;

  const updatedMessage = await myMessage.save();

  return updatedMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //   get,
  update: updateMesages,
  //   delete,
};
