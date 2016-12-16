const Article = require('../models/article');


class ArticleController {
  static createAction(req, res, next) {
    const {title, short, content} = req.body;

    const article = new Article({title, short, content});
    article.author = req.user;
    article.save()
      .then(createdArticle => res.json({data: createdArticle}))
      .catch(err => next(err));
  }

  static listAction(req, res, next) {
    Article.find({}).exec()
      .then(docs => res.json({data:{items: docs}}))
      .catch(err => next(err));
  }

  static getAction(req, res) {
    Article.findById(req.params.id).exec()
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(400).json({error: err}));
  }
}

module.exports = ArticleController;
