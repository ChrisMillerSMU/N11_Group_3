const middleware = require("./middleware/middleware");

const cors = require('cors');
const parser = require('body-parser');

const app = require('express')();
app.use(cors());
app.use(middleware.create);
app.use(middleware.request);
app.use(bodyParser.json());

app.use('/athlete', require('./routes/athlete'));
app.use('/company', require('./routes/company'));
app.use('/endoresment', require('./routes/endorsement'));
app.use('/filter', require('./routes/filter'));
app.use('/post', require('./routes/post'));
app.use('/submission', require('./routes/submission'));

const port = 3030;

app.get('/health', (request, response, next) => {
   response.json({ status: 'up', port });
   next();
});

app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});