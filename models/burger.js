const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll(res => {
            cb(res);
        });
    }
}

module.exports = burger;