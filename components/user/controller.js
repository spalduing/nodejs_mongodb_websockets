const store = require('./store');

function getUsers() {
  return new Promise(async (resolve, reject) => {
    const users = await store.list();

    resolve(users);
  });
}

function addUser(user) {
  return new Promise(async (resolve, reject) => {
    if (!user) {
      reject([
        'Incorrect data',
        '[user/controller/addUser] no "user" argument ',
      ]);
      return false;
    }

    const addedUser = await store.add(user);

    resolve(addedUser);
  });
}

function updateUser(id, userFilter) {
  return new Promise(async (resolve, reject) => {
    if (!id || !userFilter) {
      reject([
        'Incorrect data',
        '[user/controller/updateUser] no "id" or "user" arguments',
      ]);
      return false;
    }

    const updatedUser = await store.update(id, userFilter);

    resolve(updatedUser);
  });
}

function deleteUser(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject(['Incorrect data', '[user/controller/deleteUser] no id argument']);

      return false;
    }

    const deletedUser = await store.remove(id);

    resolve(`'${deletedUser._id}' successfuly deleted!`);
  });
}
module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
