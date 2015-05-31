module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        {
          id: 1,
          title: "Complete Ember.js Tutorial",
          author: 1
        },
        {
          id: 2,
          title: "Checkout some more ember stuff",
          author: 2
        },
        {
          id: 3,
          title: "Solve world hunger (with Ember)",
          author: 1
        }
      ],
      'authors': [
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
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
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
