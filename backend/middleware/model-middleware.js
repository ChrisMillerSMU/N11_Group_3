const connectToDatabase = require('../models/Database_Connection_helper.js');




const athlete = require('../models/athlete');

const createModelsMiddleware = async (req, res, next) => {
   console.log('Connecting to the database');
   const { DBQuery, disconnect } = await connectToDatabase();
   req.models = {
       athlete: new athlete(DBQuery, disconnect),
       
   }
   req.disconnect = disconnect;
   next();
}
const disconnectFromDatababaseMiddleware = (req, res, next) => {
   console.log('Disconnecting from the database');
   req.disconnect();
   next();
}
module.exports = {
   createModelsMiddleware,
   disconnectFromDatababaseMiddleware
}