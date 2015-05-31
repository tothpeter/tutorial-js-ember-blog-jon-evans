import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
    },
    {
      id: 2,
      title: "Checkout some more ember stuff",
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
    }
  ]
});