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

console.log(path.join(__dirname, 'public'));
// Congiguration du server static
app.use(express.static(path.join(__dirname, 'public')));
// Configuration des sessions

// importation des controllers
const indexController = require('./controllers/indexController');

// Utilisation des controllers pour les routes
app.use('/', indexController);

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Demarrage du server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log( `Server is running on port ${PORT}`);
});