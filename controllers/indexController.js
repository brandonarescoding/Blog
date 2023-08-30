// indexController

//Importation des modules
const express = require('express');
const router = express.Router();

//Definition de la routes
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;