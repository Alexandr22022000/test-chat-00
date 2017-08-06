const deleteSymbol = (url, symbol) => {
    if (url.substring(url.length - 1, url.length) === symbol) {
        return url.substring(0, url.length - 1);
    }
    return url;
};

module.exports = () => {
    let url = window.location.href;
    url = deleteSymbol(url, '#');
    url = deleteSymbol(url, '/');
    return url;
};