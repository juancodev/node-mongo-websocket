const express = require('express');
const response = require('../../router/response');
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

  // get query params
  console.log(req.query);

  //get body or content from request
  console.log(req.body);

  // res.send('Data send from method post ' + JSON.stringify(req.query) + ' successfully ');

  // res.send('Data send from method post ' + req.query.username + ' successfully ');

  /*
    * send status code
    res.status(201).send('create message successfully');
  */

  /*
   * send status code
    res.status(201).send([{
      error: '',
      message: 'Create message successfully'
    }]);
   */

  if (req.query.error == "ok") {
    response.error(req, res, "Error! try more late...", 400, "Error creating message");
  } else {
    response.success(req, res, "Message created successfully", 201);
  }

});

module.exports = router;