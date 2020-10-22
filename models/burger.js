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
        });
    },
    update: function(id, eaten, cb) {
        orm.updateOne(id, eaten, res => {
            cb(res);
        });
    },
    delete: function(id, cb) {
        orm.delete(id, res => {
            cb(res);
        });
    },
}

module.exports = burger;