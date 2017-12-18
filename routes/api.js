/*
Import des composants de la route
Pour fonctionner, une route à besoin de différents composants spécifiques.
*/
    const express = require('express'); // => Composant principale
    const router = express.Router(); // => Composant pour configurer des routes
//



/*
Définition des routes
Chaque adresse est définie et une action spécifique y est associée.
*/
    // Page d'accueil
    router.get('/', (req, res) => { // => Capter l'appel sur la page d'accueil
        res.json( { username: `Alan Turing`, password: `v3zWWmeeuE4M` } ); // => Renvoyer un objet JSON
    });
//



/*
Export de la route
Une fois la route configurer, il faut l'exporter pour pouvoir l'utiliser dans "server.js"
*/
    module.exports = router;
//