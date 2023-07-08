const express = require('express');
const response = require('../../router/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then(data => response.success(req, res, data, 201))
    .catch(error => response.error(req, res, 'internal Error', 500, error));
});

router.get('/:userId', (req, res) => {
  controller.listChats(req.params.userId)
    .then(users => response.success(req, res, users, 200))
    .catch(error => response.error(req, res, 'internal Error', 500, error));
});

module.exports = router;