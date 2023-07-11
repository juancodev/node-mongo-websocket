const express = require('express');
const multer = require('multer');
const response = require('../../router/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
  destination: 'public/files/',
});

//mini app
router.get('/', (req, res) => {
  const filterMessage = req.query.chat || null;

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

});

router.post('/', upload.single('file'), (req, res) => {

  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(req, res, "Error! Information invalid...", 400, "Error creating message");
    });

});

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const message = req.body.message;
  controller.updateMessage(id, message)
    .then(updateData => {
      response.success(req, res, updateData, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error Update', 500, error);
    })
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  controller.deleteMessage(id)
    .then(() => {
      response.success(req, res, `Message ${id} was deleted success`, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error internal', 500, error);
    });
});

module.exports = router;