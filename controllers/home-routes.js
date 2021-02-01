const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('./dashboard');
    return;
  }
  
  res.render('homepage', {
    EMAIL_SECRET: process.env.EMAIL_SECRET
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('./dashboard');
    return;
  }

  res.render('dashboard');
})

module.exports = router;