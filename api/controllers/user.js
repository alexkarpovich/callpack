const User = require('../models/user');


class UserController {
  static getAction(req, res) {
    User.findById(req.params.id).exec()
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(400).json({error: err}));
  }
}

module.exports = UserController;
