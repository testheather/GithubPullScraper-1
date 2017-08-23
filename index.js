/**
 * Created by: HeatherWenslerNolis
 * 08/23/2017
 */

//npm packages
const bodyParser = require('body-parser');
const request = require('request');

//set ports - environment variable OR localhost 5000
app.set('port', (process.env.PORT || 5000));

//use json parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

