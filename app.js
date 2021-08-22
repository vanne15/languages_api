var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var featuresRouter = require('./routes/features');
var languagesRouter = require('./routes/languages');
var spokenLanguagesRouter = require('./routes/spokenLanguages');

var app = express();
var helmet = require('helmet');
app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/', indexRouter);
app.use('/features', featuresRouter);
app.use('/languages', languagesRouter);
app.use('/spokenlanguages', spokenLanguagesRouter)

module.exports = app;
