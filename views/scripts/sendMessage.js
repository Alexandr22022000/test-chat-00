module.exports = (text, socket) => {
    socket.emit('send-message', text);
};