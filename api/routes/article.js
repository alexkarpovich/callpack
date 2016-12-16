const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

router.route('/')
  .get(ArticleController.listAction)
  .post(ArticleController.createAction);
router.route('/:id')
  .get(ArticleController.getAction);

module.exports = router;