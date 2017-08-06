module.exports = (socket, sockets) => {
    for (let key in sockets) {
        if (sockets[key].socket === socket.id)
            sockets.splice(key, 1);
    }
};