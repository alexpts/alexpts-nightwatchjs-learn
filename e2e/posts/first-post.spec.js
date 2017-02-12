const _ = require('lodash');
const base = require('./../base.js');

module.exports = _.assign(base, {

    'open main page': (client) => client.url(client.launchUrl),

    'click to first post': (client) => client.click('.entry-title a'),

    'wait for load single post': (client) => client.waitForElementVisible('article.single-post', 2000),

    'check change title': (client) => {
        client
            .getText('.single-post .entry-title', (result) => {
                client.assert.title(result.value);
            });
    },

    'back to main page via top menu': client => {
        client
            .click('.fast-menu a:first-child')
            .waitForElementVisible('.posts article', 2000)
    },

    'check title on main page': (client) =>  client.assert.title('Alexpts блог'),

});
