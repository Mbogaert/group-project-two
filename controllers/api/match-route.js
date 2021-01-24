const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Match, User, Dog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/results', (req, res) => {
  Match.findAll({
    attributes: [
      'characteristic'
    ],
    include: {
      model: User,
      attributes: ['username']
    },
    include: {
      model: Dog,
      attributes: ['dog_name']
    }
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;