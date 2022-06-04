const db = require('mongoose');

const Model = require('./model');

const config = require('../../network/config');

db.Promise = global.Promise;
const uri = `mongodb+srv://${config.user}:${config.pasword}@cluster0.nxuer.mongodb.net/${config.db_name}`;

db.connect(uri, { useNewUrlParser: true });
console.log('[DB] Successfully conected');

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }

  const messages = await Model.find(filter);
  return messages;
}

async function addMessage(message) {
  const myMessage = new Model(message);
  await myMessage.save();
}

async function updateMesages(id, message) {
  const myMessage = await Model.findById(id);
  myMessage.message = message;

  const updatedMessage = await myMessage.save();

  return updatedMessage;
}

async function deleteMessage(id) {
  const myMessage = await Model.findByIdAndDelete(id);
  return myMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //   get,
  update: updateMesages,
  remove: deleteMessage,
};
