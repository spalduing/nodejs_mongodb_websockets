const messages = [];

function addMessage(message) {
  messages.push(message);
}

function getMessages() {
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //   get,
  //   update,
  //   delete,
};
