const express = require('express'),
    app = express(),
    getIndex = require('./scripts/getIndex');

app.use(express.static('public'));

app.get('/', (req, res) => {
    getIndex(res);
});

app.get('/registration', (req, res) => {
    console.log(req.url);
    res.status(200).jsonp({log: 'aaa'});
});

app.listen(5000, () => {console.log('Server is starting on port 5000')});