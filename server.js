const express = require('express'),
    pg = require('pg'),
    socketDriver = require('socket.io'),
    bodyParser = require('body-parser'),

    getMainPage = require('./server-scripts/getMainPage'),
    login = require('./server-scripts/login'),
    registration = require('./server-scripts/registration'),

    app = express(),
    store = {sockets: []};

pg.defaults.ssl = true;

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.use(express.static('views'));

app.get('/', (req, res) => getMainPage(res));

app.post('/registration', (req, res) => registration(req, res, store));

const server = app.listen(app.get('port'), () => {console.log('Server is starting on port ' + app.get('port'))});

store.io = socketDriver(server);

store.io.on('connection', (socket) => {
    socket.on('login', (data) => {
        login(socket, data, store);
    });
});