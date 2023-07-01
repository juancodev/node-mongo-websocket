exports.success = (req, res, message, status) => {
  res.status(status || 200).send({
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