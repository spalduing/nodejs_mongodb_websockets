const Model = require('./model');

async function getUsers() {
  const users = await Model.find();

  return users;
}

async function addUser(user) {
  const myUser = new Model(user);

  await myUser.save();

  return myUser;
}

async function updateUser(id, userFilter) {
  const myUser = await Model.findById(id);
  const filter = {};
  if (userFilter !== null) {
    filter = userFilter;
  }

  await myUser.update(filter);

  return myUser;
}

async function deleteUser(id) {
  const myUser = await Model.findByIdAndDelete(id);

  return myUser;
}

module.exports = {
  list: getUsers,
  // get
  add: addUser,
  update: updateUser,
  remove: deleteUser,
};
