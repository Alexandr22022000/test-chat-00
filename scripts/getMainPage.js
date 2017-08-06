const fs = require('fs'),
    path = require('path');

module.exports = (res) => {
    fs.createReadStream(path.resolve('public/index.html')).pipe(res);
};