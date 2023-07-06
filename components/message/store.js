const db = require('mongoose');
const Model = require('./model');

require('dotenv').config();

const hostDB = process.env.DB_HOST;
const userDB = process.env.DB_USER;
const passwordDB = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${userDB}:${passwordDB}@${hostDB}/?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(uri, {
  useNewUrlParser: true,
});
console.log('[db] Connected to mongodb');

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

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateText,
  //delete
}