const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[MessageController]: missing user or message');
      reject('No user or message');
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }
    store.add(fullMessage);
    resolve(fullMessage);
  })

}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  addMessage,
  getMessages,
}