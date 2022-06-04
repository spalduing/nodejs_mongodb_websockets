const store = require('./store');

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject([
        'Incorrect data',
        '[message_controller: addMessage] No "user" or "message" arguments ',
      ]);
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

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

module.exports = {
  addMessage,
  getMessages,
  updateMesages,
};
