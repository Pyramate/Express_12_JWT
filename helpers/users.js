const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const calculateToken = (payload) => {
  return jwt.sign({ payload }, PRIVATE_KEY);
};

const readToken = (token) => {
  console.log(jwt.decode(token, { complete: true }).payload.payload.userId);
  return jwt.decode(token, { complete: true }).payload.payload;
};

module.exports = { calculateToken, readToken };
