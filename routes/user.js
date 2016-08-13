var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var User = require('../models/user');

/* GET user profile. */
// router.get('/', ensureLoggedIn, function(req, res, next) {
//   res.render('user', { user: req.user });
// });

router.get('/todos', ensureLoggedIn, function(req, res, next) {
  res.json(req.user.todos);
});

router.post('/todos', ensureLoggedIn, function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, { $push: {todos: req.body.text} }, function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.json(user);
  });
});

module.exports = router;
