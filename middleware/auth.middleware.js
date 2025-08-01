const protect = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized');
  }
};

module.exports = { protect };
