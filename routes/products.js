var express = require('express');
var router = express.Router();

var product = require('../models/product.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;