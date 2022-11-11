
//adding the packages needed

const mysql = require('mysql');
const util = require('util');


const connect_to_Database = async () => {

    try {

// this will allow to get function from mysql to connect and use the database
const DBConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'On3-mor3-tim3!_1',
    insecureAuth: true,
    database: 'TvAd_DB'
 });

 DBCreateConnection = util.promisify(DBConnection.connect).bind(DBConnection);
 await DBCreateConnection();

 const DBQuery = util.promisify(DBConnection.query).bind(DBConnection);
 const disconnect = () => DBConnection.end();

 return {DBQuery, disconnect };


} catch (err) {

    console.error ('ERROR with connecting to Database',err);
    throw err;
}


};

module.exports = connect_to_Database;
