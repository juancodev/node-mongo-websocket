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
    console.log(fullMessage);
    resolve(fullMessage);
  })

}

module.exports = {
  addMessage,
}