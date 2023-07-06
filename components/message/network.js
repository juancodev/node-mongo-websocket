const express = require('express');
const response = require('../../router/response');
const controller = require('./controller');
const router = express.Router();

//mini app
router.get('/message', (req, res) => {
  const filterMessage = req.query.user || null;

  //get headers
  // console.log(req.headers);

  // send custom header
  // res.header({
  //   "Custom-message-content": "this is a custom message content"
  // })

  controller.getMessages(filterMessage)
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

router.patch('/message/:id', (req, res) => {
  const id = req.params.id
  const message = req.body.message;
  controller.updateMessage(id, message)
    .then(updateData => {
      response.success(req, res, updateData, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error Update', 500, error);
    })
})

module.exports = router;