const io = require('socket.io-client'),
    changePage = require('../interface-scripts/changePage'),
    {PAGE_CHAT} = require('../constants/constants'),
    {NONE_USER, SERVER_ERROR, READY} = require('../constants/statuses');

module.exports = (store) => {
    if (store.socket) return;

    store.socket = io('http://localhost:5000');

    store.socket.on('on-login', (data) => {
        if (!data.error) {
            store.toolbar.setStatus(READY);
            store.toolbar.setUser(data.user.name);
            changePage(PAGE_CHAT);
            store.chatPage.setMessageHistory(data.messages);

            store.socket.on('on-send-message', (data) => {
                store.chatPage.onSendMessage(data.text, data.sender);
            });
        }
        else {
            switch (data.error) {
                case NONE_USER:
                    store.toolbar.setStatus(NONE_USER);
                    break;

                default:
                    store.toolbar.setStatus(SERVER_ERROR);
                    console.log(data.error);
            }
        }
    });
};