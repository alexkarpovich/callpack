const express = require('express');
const Article = require('../models/article');
const config = require('../config');
const router = express.Router();


router.post('/', (req, res) => {
  const {title, short, content} = req.body;

  const article = new Article({title, short, content});
});

router.get('/:id', (req, res) => {
  Article.findById(req.params.id).exec()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(400).json({error: err}));
});

module.exports = router;
