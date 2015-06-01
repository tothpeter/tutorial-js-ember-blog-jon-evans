if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}


module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var posts = [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      body: 'body',
      author: 1,
      date: new Date(2014, 5, 4, 6, 0, 0)
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
      body: 'body2',
      author: 2,
      date: new Date(2015, 5, 1, 21, 31, 0)
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      body: 'body3',
      author: 1,
      date: new Date(2010, 6, 1, 21, 31, 0)
    }
  ];

  var authors = [
    {
      id: 1,
      name: 'Toma',
      // posts: [1,3]
    },
    {
      id: 2,
      name: 'Author2',
      // posts: [2]
    }
  ];

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts,
      'authors': authors
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'post': posts.find(function(post) {
        return post.id == req.params.id;
      }),
      'authors': authors
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
