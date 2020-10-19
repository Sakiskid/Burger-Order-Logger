const connection = require("./connection");

const orm = {
    selectAll: async function () {
        let query = `SELECT * FROM burgers`;
        return await connection.query(query, (res) => {
            console.log("Select all: \n" + res);
        });
    },
    insertOne: function () {
        
    },
    updateOne: function () {

    }
}

module.exports = orm;