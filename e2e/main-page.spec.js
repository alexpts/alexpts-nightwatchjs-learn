module.exports = {
  before: function(client) {
    client.windowMaximize();
  },

  after: function(client) {
    client.end();
  },

  'open main page': function(client) {
    client.url(client.launchUrl);
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
};
