const mysql = require('mysql');

const DBConnection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Sped6854.',
   insecureAuth: true,
});

DBConnection.connect((err) => {
   if (err) {
       console.error('There was a problem connecting to the DB', err);
       return;
   }
   connectionSuccessHandler();
});

const connectionSuccessHandler = () => {
   console.log('Successful connection!');
}