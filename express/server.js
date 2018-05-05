/*eslint-disable */
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let functions = require('./functions');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.post('/authorize', functions.authorize);
app.post('/search', functions.search); //might need it later
app.post('/top', functions.top);
console.log('server');
app.listen(3000);
/*eslint-enable */
