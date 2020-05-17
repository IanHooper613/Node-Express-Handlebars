//imports mysql connection
var connection = require('./connection.js')

const orm = {
    selectAll: function(tableName, queryCallback) {
        connection.query('SELECT * FROM ??;', [tableName], function(error, result) {
            if (error) throw error
            console.log(result)
            queryCallback(result)
        })
    },

    insertOne: function(tableName, columnName, burger_name, queryCallback) {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [tableName, columnName, burger_name], function(error, result) {
            if (error) throw error
            console.log(result)
            queryCallback(result)
        })
    },

    updateOne: function(tableName, columnName, devoured, id, queryCallback) {
        connection.query('UPDATE ?? SET ?? = ? WHERE id = ?', [tableName, columnName, devoured, id], function(error, result) {
            if (error) throw error
            console.log(result)
            queryCallback(result)
        })
    },
}


module.exports = orm;