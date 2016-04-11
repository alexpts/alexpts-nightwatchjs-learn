var _ = require('lodash');
var bootstrap = require('./includes/bootstrap.js');

module.exports = _.assign(bootstrap, {
  'open main page': function(client) {
    client.url(client.launchUrl + '/');
  },

  'check title': function(client) {
    client.assert.title('Alexpts блог');
  },

  'header should exist': function(client) {
    client
      .assert.visible('header')
      .assert.elementPresent('header');
  },

  'footer should exist': function(client) {
    client.assert.visible('footer');
  }
});
