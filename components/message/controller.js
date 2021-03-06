const store = require('./store');
const socket = require('../../socket').socket;

function getMessages(messageFilter) {
  return new Promise(async (resolve, reject) => {
    const messages = await store.list(messageFilter);
    socket.io.emit('message', messages);

    resolve(messages);
  });
}

function addMessage(message, file) {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject([
        'Incorrect data',
        '[message_controller: addMessage] No "user" or "message" arguments ',
      ]);
      return false;
    }

    const fullMessage = {
      ...message,
      date: new Date(),
    };

    if (file) {
      const fileUrl = `http://localhost:3000/server/public/files/${file.filename}`;
      fullMessage.file = fileUrl;
    }

    store.add(fullMessage);

    resolve(fullMessage);
  });
}

function updateMesages(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject([
        'Incorrect data',
        '[message_controller: updateMessage] No "id" or "message" arguments ',
      ]);

      return false;
    }

    const updatedMessage = await store.update(id, message);

    resolve(updatedMessage);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log(id);
      reject([
        'Incorrect data',
        '[message_controller: deleteMessage] No "id" argument ',
      ]);
      return false;
    }

    const deletedMessage = await store.remove(id);
    resolve(`'${deletedMessage._id}' succesfully deleted!`);
  });
}
module.exports = {
  addMessage,
  getMessages,
  updateMesages,
  deleteMessage,
};
