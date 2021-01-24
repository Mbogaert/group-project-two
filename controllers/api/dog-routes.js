const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Dog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/add-dog', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});