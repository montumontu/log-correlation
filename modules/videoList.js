const videoList = require('../dummy-videos-list.json');
const rTracer = require('cls-rtracer');


const get = () => {
  const requestId = rTracer.id();
  console.log(`Returning Video list: ${requestId}`);
  return {
    type: videoList,
  };
}

module.exports = { get };