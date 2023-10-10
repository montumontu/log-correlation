const rTracer = require('cls-rtracer');
function findUser() {
  const requestId = rTracer.id();
  console.log(`requestId: ${requestId}`);
  return [{
    name: 'Ram',
    age: 30
  }]
}

module.exports = { findUser };