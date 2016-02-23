/**
 * Created by ep3998 on 2/6/2016.
 */
var express = require('express');
var router = express.Router();

var NPC = require('../models/NPC');

/* GET /characters listing */
router.get('/', function(req, res, next){
    var filter = {};
    for(var i in req.params){
        filter[i] = req.param(i);
    }

   NPC.find(filter, function(err, chars){
      if(err) return next(err);
       res.json(chars);
   });
});

router.post('/', function(req, res, next){
   NPC.create(req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/', function(req, res, next){
    var filter = {};
    for(var i in req.params){
        filter[i] = req.param(i);
    }

    NPC.find(filter).remove(function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.get('/:id', function(req, res, next){
   NPC.findById(req.params.id, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.put('/:id', function(req, res, next){
   NPC.findByIdAndUpdate(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.delete('/:id', function(req, res, next){
   NPC.findByIdAndRemove(req.params.id, req.body, function(err, post){
       if(err) return next(err);
       res.json(post);
   });
});

router.get('/type/:typeName', function(req, res, next){
    NPC.findOne({ type: req.params.typeName }, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.put('/type/:typeName', function(req, res, next){
    NPC.findOneAndUpdate({ type: req.params.typeName }, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

router.delete('/type/:typeName', function(req, res, next){
    NPC.findOneAndRemove({ type: req.params.typeName }, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});


module.exports = router;