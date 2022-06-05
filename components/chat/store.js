const Model = require('./model');

async function getChats(userChatFilter) {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (userChatFilter !== null) {
      filter = { users: userChatFilter };
    }

    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject([
            'Data base error',
            '[components/chat/store] error while getting a chat',
          ]);
          return false;
        }
        resolve(populated);
      });
  });
}

async function addChat(chat) {
  const myChat = await Model(chat);

  return await myChat.save();
}

module.exports = {
  list: getChats,
  add: addChat,
};
