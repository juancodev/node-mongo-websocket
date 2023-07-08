const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId) {
      filter = {
        users: userId
      }
    }

    Model.find(filter)
      .populate('users')
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

module.exports = {
  add: addChat,
  list: listChats
}