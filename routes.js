const express = require('express');
const router = express.Router();
const rTracer = require('cls-rtracer');
const videoList = require("./modules/videoList");

router.get('/video-list', (req, res) => {
  const requestId = rTracer.id();
  const videoListRes = videoList.get();
  console.log(`requestId: ${requestId}`);
  res.send(videoListRes);
}
);
router.get('/ping', (req, res) => {
  const requestId = rTracer.id();
  const userProfile = user.findUser();
  console.log(`requestId: ${requestId}`);
  res.send('Pinging to the World!');
}
);
module.exports = router;