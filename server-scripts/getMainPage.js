const fs = require('fs'),
    path = require('path');

module.exports = (res) => {
    fs.createReadStream(path.resolve('views/index.html')).pipe(res);
};