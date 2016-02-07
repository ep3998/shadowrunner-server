/**
 * Created by ep3998 on 2/6/2016.
 */
var express = require('express');
var router = express.Router();

var Definition = require('../models/Definition');

/* GET /characters listing */
router.get('/', function(req, res, next){
    var filter = {};
    for(var i in req.query){
        filter[i] = req.query[i];
    }

    Definition.find(filter, function(err, chars){
      if(err) return next(err);
       res.json(chars);
   });
});

router.post('/', function(req, res, next){
    Definition.create(req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.get('/:id', function(req, res, next){
    Definition.findById(req.params.id, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.put('/:id', function(req, res, next){
    Definition.findByIdAndUpdate(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/:id', function(req, res, next){
    Definition.findByIdAndRemove(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.get('/api/:apiName', function(req, res, next){
    Definition.findOne({ api_name: req.params.apiName }, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/api/:apiName', function(req, res, next){
    Definition.findOneAndUpdate({ api_name: req.params.apiName }, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/api/:apiName', function(req, res, next){
    Definition.findOneAndRemove({ api_name: req.params.apiName }, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.post('/bulk', function(req, res, next){
    Definition.collection.insert(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;