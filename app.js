// Variáveis do express e do handlebars
var express = require('express');
var { engine } = require('express-handlebars');

// App
var app = express();

var bodyParser = require('body-parser');

// Template
app.engine('handlebars', engine({ defaultLayout: 'principal' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Especificar arquivos estáticos 
app.use(express.static(__dirname + '/publico'));

// Array para armazenar os usuários cadastrados
const users = [];

// Configurar o body-parser para lidar com solicitações JSON
app.use(bodyParser.json());

// Configurar o body-parser para lidar com solicitações URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/', function (req, res) {
    res.render('inicio');
});

// Rota para exibir o formulário de login
app.get('/login', (req, res) => {
    res.render('login');
});

// Rota para lidar com o envio do formulário de login
app.post('/login', (req, res) => {
    const { name, email, number } = req.body;

    // Armazenar os dados do usuário cadastrado
    users.push({ name, email, number });

    // Redirecionar para a página de sucesso após o login bem-sucedido
    res.redirect(`/suceso?name=${name}`);
});

// Rota para exibir a página de sucesso
app.get('/suceso', (req, res) => {
    const name = req.query.name;

    res.render('suceso', { name });
});

// Rota para exibir os dados cadastrados
app.get('/dados', (req, res) => {
    res.render('dados', { users });
});

// Servidor
app.listen(8080);
