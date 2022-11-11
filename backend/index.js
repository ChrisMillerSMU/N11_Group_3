const express = require('express');




const athleteRoutes = require('./routes/athlete');


const { createModelsMiddleware, disconnectFromDatababaseMiddleware } = require('./middleware/model-middleware');

const app = express();
const port = 8080;

app.use(createModelsMiddleware);


app.get('/health', (request, response, next) => {
    const responseBody = { status: 'Good To Go', port };
    response.json(responseBody);
   
    next();
 });



 app.use('/athletes', athleteRoutes);

 app.use(disconnectFromDatababaseMiddleware);

 app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
 });

