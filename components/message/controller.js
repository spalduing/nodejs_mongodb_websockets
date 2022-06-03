const store = require('./store');

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

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getMessages,
};
