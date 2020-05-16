var orm = require('../config/orm.js')

var burger = {
    selectAll: function(queryCallback) {
        orm.selectAll('burgers', queryCallback)
    },

    insertOne: function(burger_name, queryCallback) {
        orm.insertOne('burgers', 'burger_name', burger_name, queryCallback)
    },

    updateOne: function(burger_id, queryCallback) {
        orm.updateOne('burgers', 'devoured', true, burger_id, queryCallback)
    },

    restoreOne: function(burger_id, queryCallback) {
        orm.updateOne('burgers', 'devoured', false, burger_id, queryCallback)
    }
}

module.exports = burger