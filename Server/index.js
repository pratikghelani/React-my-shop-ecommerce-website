require('dotenv').config();
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT;
const Connection = require('./database/db.js');
const defaultdata = require('./default.js');
const cookieParser = require('cookie-parser')
const routers = require('./routes/routers.js');

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use('/', routers);

Connection();


app.listen(PORT,()=> console.log(`Running app on ${PORT} Port`));

// Default data to database
defaultdata();