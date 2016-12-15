var nodeTrello = require('node-trello'),
    config = require('../config/auth.json'),
    trello = new nodeTrello(config.apiKey, config.token),
    boardId = inputs.boardId;

return trello.get('/1/boards/' + boardId + '/lists', function(err, data) {
    if (err) {
        return exits.error(err);
    } else {
        return exits.success(data);
    }
});