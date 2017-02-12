const _ = require('lodash');
const base = require('./base.js');

module.exports = _.assign(base, {

  'open home page': (client) => client.url(client.launchUrl),

  'check title home page': (client) => client.assert.title('Alexpts блог'),

  'header should exist': client => {
    client
      .assert.visible('header')
      .assert.elementPresent('header');
  },

  'footer should exist': (client) => client.assert.visible('footer')
});
