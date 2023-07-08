const Model = require('./model');

function getUsers(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = {
      user: filterUser
    };
  }

  const fondUser = Model.find(filter);
  return fondUser;
}

function addUser(user) {
  const newUser = new Model(user);
  return newUser.save();
}

module.exports = {
  add: addUser,
  list: getUsers,
}