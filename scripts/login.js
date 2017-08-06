const getMessagesHistory = require('./getMessagesHistory'),
    sendMessage = require('./sendMessage'),
    deleteSocket = require('./deleteSocket'),
    cheekLogin = require('./cheekLogin'),
    {connectToDatabase, disconnectDatabase} = require('./databaseConnectManager');

const addSocket = (socket, answer, store) => {
    socket.on('disconnect', () => {
        deleteSocket(socket, store.sockets);
        disconnectDatabase(store);
    });

    socket.on('logout', () => socket.disconnect());

    store.sockets.push({user: answer.user.login, socket: socket.id});

    socket.on('send-message', (text) => sendMessage(answer.user.name, text, store.pool, (error) => {
        if (error) {
            socket.emit('sending-error', error);
        }
        else {
            for (let key in store.sockets) {
                store.io.sockets.sockets[store.sockets[key].socket].emit('on-send-message', {text, sender: answer.user.name});
            }
        }
    }));

    getMessagesHistory(store.pool, (history) => {
        if (!history.error) {
            answer.messages = history.messages;
            socket.emit('on-login', answer);
        }
        else {
            notLogin(history.error, socket, store);
        }
    });
};

const notLogin = (error, socket, store) => {
    socket.emit('on-login', {error});
    disconnectDatabase(store);
};

module.exports = (socket, data, store) => {
    connectToDatabase(store);
    cheekLogin(data, store.pool, (answer) => {
        if (!answer.error) {
            addSocket(socket, answer, store);
        }
        else {
            notLogin(answer.error, socket, store);
        }
    });
};