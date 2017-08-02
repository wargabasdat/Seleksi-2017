var express = require('express');
var router = express.Router();
var request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HealthCare' });
});

/* Get personal page */
router.get('/personal', function(req, res, next) {
  res.render('personal', { title: 'HealthCare | Personal Information' });
});

/* Get regional page */
router.get('/regional', function(req, res, next) {
  res.render('regional', { title: 'HealthCare | Regional Information' });
});

/* POST home page */
router.post('/regional', function(req, res, next) {
  res.render('regional', { title: 'HealthCare | Regional Information' });
});

module.exports = router;