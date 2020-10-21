const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        let query = `SELECT * FROM burgers;`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (name, cb) {
        let query = `
            INSERT INTO burgers (burger_name, eaten)
            VALUES (?, false);`;
        connection.query(query, [name], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },
    updateOne: function () {
        let query = ``;   
    }
}

module.exports = orm;