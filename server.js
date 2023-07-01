const express = require('express');
const path = require('path');
const response = require('./network/response');

const routes = express.Router();
const app = express();

app.use(express.json());
app.use(routes);

//app

app.use('/', express.static('public'));

//mini app
routes.get('/message', (req, res) => {

  //get headers
  console.log(req.headers);

  // send custom header
  res.header({
    "Custom-message-content": "this is a custom message content"
  })

  response.success(req, res, "List of messages received",
    200);

})

routes.post('/message', (req, res) => {

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

app.use('/user', express.static('public'));

app.listen(3001);
console.log('My app listening on port 3001');