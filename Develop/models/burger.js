const orm = require('../config/orm.js');

const burger = {
    all: function() {
        orm.selectAll();
    }
}

module.exports = burger;