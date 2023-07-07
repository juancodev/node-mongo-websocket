const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
};

async function getMessage(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = {
      user: filterUser
    };
  }
  const messages = await Model.find(filter);
  return messages;
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