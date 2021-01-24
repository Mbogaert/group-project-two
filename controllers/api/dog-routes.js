const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Dog } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', (req, res) => {
  Dog.create({ dog_name: req.body.dog_name, characteristic: req.body.characteristic, user_id: req.session.user_id })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;