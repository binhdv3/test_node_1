const express = require('express');
const {engine} = require('express-handlebars');//npm i express-handlebars
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const methodOverride = require('method-override');
const { userInfo } = require('os');
//router
const router = require('./routers/index')
//database
const db = require('./config/db/index');
db.connect();

const port = 3030;
const app = express();
//method use to edit and delete
app.use(methodOverride('_method'))

//use body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//use morgan

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({ extname: '.hbs' , defaultLayout: 'main'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.use(cors());

//router
router(app)

app.listen(port, () => { 
    console.log(`--> App listening att http://localhost:${port}`);
})