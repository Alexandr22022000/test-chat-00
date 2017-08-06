module.exports = (url) => {
    url = url.substring(url.indexOf('?', 0) + 1, url.length);
    let start = 0, end = null, params = {};

    while (true) {
        let equalPos = url.indexOf('=', start);
        if (url.indexOf('&', equalPos) !== -1) {
            end = url.indexOf('&', equalPos);
        }
        else {
            end = url.length;
        }

        let name = url.substring(start, equalPos);
        params[name] = url.substring(equalPos + 1, end);

        if (end === url.length) break;

        start = end + 1;
    }

    return params;
};