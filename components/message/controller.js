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

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.log('[updateMessage] Error Data');
      reject('Data invalid in method patch');
    }

    const result = await store.update(id, message);
    resolve(result);

  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
}