/**
 * Created by ep3998 on 2/6/2016.
 */
var express = require('express');
var router = express.Router();

var Role = require('../models/Role');

/* GET /characters listing */
router.get('/', function(req, res, next){
    var filter = {};
    for(var i in req.query){
        filter[i] = req.query[i];
    }

    Role.find(filter, function(err, chars){
      if(err) return next(err);
       res.json(chars);
   });
});

router.post('/', function(req, res, next){
    Role.create(req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.get('/:id', function(req, res, next){
    Role.findById(req.params.id, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.put('/:id', function(req, res, next){
    Role.findByIdAndUpdate(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/:id', function(req, res, next){
    Role.findByIdAndRemove(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.post('/bulk', function(req, res, next){
    Role.collection.insert(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;