//Mock

const list = [];

function addMessage(message) {
  list.push(message);
};

function getMessage() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get
  //update
  //delete
}