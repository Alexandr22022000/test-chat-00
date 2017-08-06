const express = require('express'),
    pg = require('pg'),
    socketDriver = require('socket.io'),

    getIndex = require('./scripts/getIndex'),
    login = require('./scripts/login'),
    registration = require('./scripts/registration'),

    app = express(),
    store = {sockets: []};

pg.defaults.ssl = true;

app.use(express.static('public'));

app.get('/', (req, res) => getIndex(res));

app.get('/registration', (req, res) => registration(req, res, store));

const server = app.listen(5000, () => {console.log('Server is starting on port 5000')});

store.io = socketDriver(server);

store.io.on('connection', (socket) => {
    socket.on('login', (data) => {
        login(socket, data, store);
    });
});