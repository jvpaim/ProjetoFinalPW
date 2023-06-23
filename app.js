//variaveis do express e do handlebars
var express = require('express');
var { engine } = require('express-handlebars');
var bp = require('body-parser');

//App
var app = express();

//Body-parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

//Template
//app.engine('handlebars', exphbs({defaultLayout : 'principal'}));
app.engine('handlebars', engine({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//Especificar arquivos estaticos 
app.use(express.static(__dirname + '/publico'));


//Rotas
app.get('/', function (req, res) {
    res.render('inicio');
});

app.get('/clientes', function (req, res) {
    res.render('clientes');
});

app.get('/login', function (req, res) {
    res.render('login');
});


//Servidor
app.listen(3000);