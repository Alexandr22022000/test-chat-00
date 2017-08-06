module.exports = (line) => {
    while (line.substring(line.length - 1, line.length) === ' ') {
        line = line.substring(0, line.length - 1);
    }
    return line;
};