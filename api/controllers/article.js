const Article = require('../models/article');


class ArticleController {
  static createAction(req, res) {
    const {title, short, content} = req.body;

    //const article = new Article({title, short, content});
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
