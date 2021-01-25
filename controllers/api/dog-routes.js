const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Dog } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Dog.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Dog.create({ dog_name: req.body.dog_name, energy: req.body.energy, vaccine: req.body.vaccine, human_interaction: req.body.human_interaction, user_id: req.session.user_id })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;