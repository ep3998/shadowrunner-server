/**
 * Created by ep3998 on 2/6/2016.
 */
var express = require('express');
var router = express.Router();

var Character = require('../models/Character');

/* GET /characters listing */
router.get('/', function(req, res, next){
    var filter = {};
    for(var i in req.params){
        filter[i] = req.param(i);
    }

   Character.find(filter, function(err, chars){
      if(err) return next(err);
       res.json(chars);
   });
});

router.post('/', function(req, res, next){
   Character.create(req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/', function(req, res, next){
    var filter = {};
    for(var i in req.params){
        filter[i] = req.param(i);
    }

    Character.find(filter).remove(function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.get('/:id', function(req, res, next){
   Character.findById(req.params.id, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.put('/:id', function(req, res, next){
   Character.findByIdAndUpdate(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/:id', function(req, res, next){
   Character.findByIdAndRemove(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});


module.exports = router;