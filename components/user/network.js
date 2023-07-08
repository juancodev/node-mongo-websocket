const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  const filterUser = req.query.user || null;

  controller.getUsers(filterUser)
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Internal Error', 500, error);
    })
})

router.post('/', (req, res) => {
  console.log(req.body.name);
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(error => response.error(req, res, 'internal Error', 500, error));
})

module.exports = router;