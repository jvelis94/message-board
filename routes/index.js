var express = require('express');
var router = express.Router();

let messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: new Date()  
  },
  {
    text: 'Hello World',
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages, new_form: 'New Message' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Message Board', messages: messages });
});

/* GET home page. */
router.post('/new', function(req, res, next) {
  messages.push({user: req.body.author_name, text: req.body.message_text, added: new Date()});
  res.redirect('/');
});

module.exports = router;
