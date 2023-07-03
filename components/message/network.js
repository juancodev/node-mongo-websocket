const express = require('express');
const response = require('../../router/response');
const controller = require('./controller');
const router = express.Router();

//mini app
router.get('/message', (req, res) => {

  //get headers
  console.log(req.headers);

  // send custom header
  res.header({
    "Custom-message-content": "this is a custom message content"
  })

  response.success(req, res, "List of messages received",
    200);

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