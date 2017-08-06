const deleteSpace = require('./deleteSpace');

module.exports = (pool, callback) => {
    pool.query('SELECT * FROM messages', (error, data) => {
        if (error) return callback({error});

        let messages = data.rows;
        messages.map((message) => ({
            text: deleteSpace(message.text),
            sender: deleteSpace(message.sender),
            date: message.date
        }));

        messages.sort((a, b) => {
            if (Number(a.date) > Number(b.date)) return 1;
            if (Number(a.date) < Number(b.date)) return -1;
        });

        callback({messages});
    });
};