var nodeTrello = require('node-trello'),
    config = require('../config/auth.json'),
    trello = new nodeTrello(config.apiKey, config.token),
    listIdToMove = inputs.listIdToMove,
    boardIdToMoveTo = inputs.boardIdToMoveTo,
    listIdToMoveTo = inputs.listIdToMoveTo;

return trello.post('/1/lists/' + listIdToMove + '/moveAllCards', {
    idBoard: boardIdToMoveTo,
    idList: listIdToMoveTo
}, function(err, data) {
    if (err) {
        return exits.error(err);
    } else {
        if (data.length) {
            return exits.successNoCardsMoved();
        } else {
            return exits.success(data);
        }
    }
});