const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// these open routes may need to be addressed
router.get('/', withAuth, (req, res) => {
  res.render('dashboard')
});

// these open routes may need to be addressed
router.get("/new-post", withAuth, (req, res) => {
  res.render('new-post');
});

router.get("/results", withAuth, (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'content',
      'dog_name',
      'energy'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('results', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/post/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'content',
      'dog_name',
      'energy'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('single-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/high-energy", withAuth, (req, res) => {
  Post.findAll({
    where: {
      energy: 'High Energy'
    },
    attributes: [
      'id',
      'title',
      'content',
      'dog_name',
      'energy'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(result => {
      const posts = result.map(post => post.get({ plain: true }));
      res.render('high-energy', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/in-between", withAuth, (req, res) => {
  Post.findAll({
    where: {
      energy: 'In between'
    },
    attributes: [
      'id',
      'title',
      'content',
      'dog_name',
      'energy'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(result => {
      const posts = result.map(post => post.get({ plain: true }));
      res.render('in-between', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/mellow", withAuth, (req, res) => {
  Post.findAll({
    where: {
      energy: 'Mellow'
    },
    attributes: [
      'id',
      'title',
      'content',
      'dog_name',
      'energy'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(result => {
      const posts = result.map(post => post.get({ plain: true }));
      res.render('mellow', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;