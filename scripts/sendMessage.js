module.exports = (sender, text, pool, callback) => {
    pool.query('INSERT INTO messages(text, sender, date) VALUES($1, $2, $3)', [text, sender, new Date().getTime()], (error, data) => {
        if (error) return callback(error);
        callback();
    });
};