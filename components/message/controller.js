const store = require('./store');

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[MessageController]: missing user or message');
      reject('No user or message');
    }

    const fullMessage = {
      chat: chat,
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

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalid');
    }
    store.delete(id)
      .then((result) => {
        if (result) {

          resolve();
        } else {
          reject("[Controller] Data doesn't exists");
        }
      })
      .catch((error) => {
        reject(`[Controller Delete] ${error}`);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}