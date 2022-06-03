exports.success = function ({ error = '', status = 200, req, res, message }) {
  res.status(status).send({
    error,
    body: message,
  });
};

exports.error = function ({ error = '', status = 500, req, res, message }) {
  res.status(status).send({
    error: message,
    body: '',
  });
};
