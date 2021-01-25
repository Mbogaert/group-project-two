const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  res.render('dashboard')
});

router.get("/new-post", (req, res) => {
  res.render('new-post');
});

router.get("/add-dog", (req, res) => {
  res.render('add-dog');
});

router.get("/results", (req, res) => {
  res.render('results');
});

module.exports = router;