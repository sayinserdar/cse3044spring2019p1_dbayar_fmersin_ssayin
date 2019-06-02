const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
let EventRouter = require('./routes/event');
let UserRouter = require('./routes/user');
let loginRouter = require('./routes/login');
let homepageRouter =require('./routes/homepage');
let singupRouter = require('./routes/signup');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.use('/', routes);
app.use('/login',loginRouter);
app.use('/homepage', homepageRouter);
app.use('/signup', singupRouter);
app.use('/event', EventRouter);
app.use('/user', UserRouter);


app.set("view engine", "pug");
app.set("views", 'views', "views");
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



