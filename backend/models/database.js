const mysql = require('mysql');
const util = require('util');

const connect = async () => {
    try {
        const connection = mysql.createConnection({
            port: 3306,
            host: 'localhost',
            user: 'root',
            password: 'Sped6854',
            insecureAuth: true,
            database: 'tv_advertisement'
        });
        
        await util.promisify(connection.connect).bind(connection);

        const DBQuery = () => {
            util.promisify(connection.query).bind(connection);
        }
        const disconnect = () => connection.end();
        return { DBQuery, disconnect };

    } catch (err) {
        console.error('Connection error', err);
        throw err;
    }
};

module.exports = connect;