const express = require('express');
const response = require('../../router/response');
const controller = require('./controller');
const router = express.Router();

//mini app
router.get('/message', (req, res) => {

  //get headers
  // console.log(req.headers);

  // send custom header
  // res.header({
  //   "Custom-message-content": "this is a custom message content"
  // })

  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch(error => {
      response.error(req, res, 'Unexpected error', 500, error.message);
    })

})

router.post('/message', (req, res) => {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(req, res, "Error! Information invalid...", 400, "Error creating message");
    });

});

module.exports = router;