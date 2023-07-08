const store = require('./store');

function getUsers(filterUser) {
  return new Promise(async (resolve, reject) => {
    resolve(store.list(filterUser));
  })
}

function addUser(name) {
  if (!name) {
    return Promise.reject('invalid name');
  }

  const user = {
    name,
  };

  return store.add(user);
}

module.exports = {
  addUser,
  getUsers,
}