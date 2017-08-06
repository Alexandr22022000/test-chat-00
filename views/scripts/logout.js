const changePage = require('../interface-scripts/changePage'),
    {PAGE_LOGIN} = require('../constants/constants');

module.exports = (store) => {
    store.socket.emit('logout', null);
    store.socket = undefined;
    store.toolbar.setUser(null);
    changePage(PAGE_LOGIN);
};