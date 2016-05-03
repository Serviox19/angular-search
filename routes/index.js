var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('/public/views/index.html');
});

module.exports = router;
