const store = require('./store');

function getChats(userChatFilter) {
  return new Promise(async (resolve, reject) => {
    const chatUsers = await store.list(userChatFilter);

    resolve(chatUsers);
  });
}

function addChat(users) {
  return new Promise(async (resolve, reject) => {
    if (!users) {
      reject([
        'Incorrect data',
        '[components/chat/controller] no "users" argument',
      ]);
      return false;
    }
    const createdChatUsers = await store.add(users);

    resolve(createdChatUsers);
  });
}

module.exports = {
  getChats,
  addChat,
};
