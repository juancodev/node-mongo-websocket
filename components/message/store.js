const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
};

async function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser !== null) {
      filter = {
        user: filterUser
      };
    }
    // populate in mongoose with mongodb
    Model.find(filter)
      .populate('user')
      .then(response => {
        resolve(response);
      })
      .catch(error => reject(error));
    // .exec((error, populated) => {
    //   if (error) reject(error);

    //   resolve(populated);
    // });
  })
}

async function updateText(id, message) {
  const foundMessage = await Model.findById(id);

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function deleteMessage(id) {
  const existsId = await Model.exists({
    _id: id
  })

  if (!existsId) {
    return existsId;
  }


  return await Model.findByIdAndDelete(id);
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateText,
  delete: deleteMessage
}