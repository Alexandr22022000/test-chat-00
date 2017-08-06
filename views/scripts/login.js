const {WAITING} = require('../constants/statuses');

module.exports = (login, password, store) => {
    store.toolbar.setStatus(WAITING);
    store.socket.emit('login', {login, password});
};