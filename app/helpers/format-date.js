import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(date) {
  // return new Ember.Handlebars.SafeString('<span class="hightlitht">' + date + '</span>');
  return moment(date).fromNow();
});