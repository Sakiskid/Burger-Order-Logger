const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll(res => {
            cb(res);
        });
    },
    insert: function(burgerName, cb) {
        orm.insertOne(burgerName, res => {
            cb(res);
        })
    }
}

module.exports = burger;