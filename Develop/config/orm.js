const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        let query = `SELECT * FROM burgers;`;
        connection.query(query, (err, res) => {
            cb(res);
        });
    },
    insertOne: function () {
        
    },
    updateOne: function () {

    }
}

module.exports = orm;