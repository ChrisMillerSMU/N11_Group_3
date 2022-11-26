const middleware = require("./middleware/middleware");
const bodyParser = require('body-parser');

const app = require('express')();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());
app.use(middleware.create);
app.use(middleware.request);

app.use('/athlete', require('./routes/athlete'));
app.use('/company', require('./routes/company'));
app.use('/endorsement', require('./routes/endorsement'));
app.use('/filter', require('./routes/filter'));
app.use('/post', require('./routes/post'));
app.use('/submission', require('./routes/submission'));

const port = 3001;

app.get('/health', (request, response, next) => {
   response.json({ status: 'up', port });
   next();
});

app.listen(port, () => {
   console.log(`Listening to port ${port}`);
});