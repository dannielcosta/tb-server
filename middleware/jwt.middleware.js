require('dotenv').config();
const { expressjwt: jwt } = require('express-jwt');

console.log('JWT Secret in middleware:', process.env.TOKEN_SECRET); // Add this line

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'payload',
  getToken: getTokenFromHeaders,
});

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1];
    return token;
  }
  return null;
}

module.exports = {
  isAuthenticated,
};
