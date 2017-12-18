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
  // Page Home
  router.get('/', (req, res) => { // => Capter l'appel sur la page d'accueil
    res.render('index'); // => Renvoyer la vue "index.html"
  });

  // Page A propos
  router.get('/about', (req, res) => { // => Capter l'appel sur la page d'accueil
    res.render('about'); // => Renvoyer la vue "index.html"
  });
//



/*
Export de la route
Une fois la route configurer, il faut l'exporter pour pouvoir l'utiliser dans "server.js"
*/
  module.exports = router;
//