const Model = require('./model');

async function getMessages(messageFilter) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (messageFilter !== null) {
      const noQueryParams =
        messageFilter.user == null && messageFilter.chat == null;

      const filterToApply =
        messageFilter.user !== null
          ? { user: messageFilter.user }
          : { chat: messageFilter.chat };
      filter = noQueryParams ? {} : filterToApply;
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(['Server error', error]);
        }
        resolve(populated);
      });
  });
}

async function addMessage(message) {
  const myMessage = new Model(message);
  const addedMessage = await myMessage.save();
  return addedMessage;
}

async function updateMesages(id, messageFilter) {
  let filter = {};
  if (messageFilter !== null) {
    filter = messageFilter;
  }

  const updatedMessage = await Model.findByIdAndUpdate(id, filter);

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
