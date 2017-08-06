const express = require('express'),
    pg = require('pg'),
    socketDriver = require('socket.io'),

    getIndex = require('./scripts/getIndex'),
    login = require('./scripts/login'),
    registration = require('./scripts/registration'),

    app = express(),
    store = {sockets: []};

pg.defaults.ssl = true;

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/', (req, res) => getIndex(res));

app.get('/registration', (req, res) => registration(req, res, store));

const server = app.listen(app.get('port'), () => {console.log('Server is starting on port ' + app.get('port'))});

store.io = socketDriver(server);

store.io.on('connection', (socket) => {
    socket.on('login', (data) => {
        login(socket, data, store);
    });
});