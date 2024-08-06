var express = require('express');
var router = express.Router();

var list =[
    {
        "id": 1,
        "name":'banh' }
    ]

router.get('/phuc', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
      const{id, name} = req.body;
});


module.exports = router;
