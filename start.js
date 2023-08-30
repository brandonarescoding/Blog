//start.js

// Importation des modules;
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configuration du moteur de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuration des sessions
app.use(session({
    secret: '677024960',
    resave: false,
    saveUninitialized: true
}));

// importation des controllers
const indexController = require('./controllers/indexController');

// Utilisation des controllers pour les routes
app.use('/', indexController);

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Demarrage du server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log( `Server is running on port ${PORT}`);
});