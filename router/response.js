const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error',
}

exports.success = (req, res, message, status) => {
  let statusCode = status;
  let statusMessage = message

  if (!status) {
    status = 200;
  }

  if (!message) {
    statusMessage = statusMessages[status];
  }

  res.status(statusCode).send({
    error: '',
    message: message || 'created successfully'
  });
}

exports.error = (req, res, message, status, details) => {
  console.log('[Require error]: ', details) //customer error

  res.status(status || 500).send({
    error: message || 'Server error',
    message: ''
  });
}