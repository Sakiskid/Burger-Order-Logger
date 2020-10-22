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
    updateOne: function (id, eaten, cb) {
        let query = `
            UPDATE burgers
            SET eaten = ?
            WHERE id = ?`;   
        connection.query(query, [eaten, id], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },
    delete: function (id, cb) {
        let query = `
        DELETE FROM burgers WHERE id = ?`;
        connection.query(query, [id], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
}

module.exports = orm;