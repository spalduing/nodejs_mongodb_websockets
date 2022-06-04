const Model = require('./model');

async function getMessages(filterUser) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(['Server error', error]);
        }
        console.log('messages', populated);
        resolve(populated);
      });
  });
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
