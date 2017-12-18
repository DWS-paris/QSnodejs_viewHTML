/*
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', function(){

        // La fonction fetch() prend en paramètre l'adresse de l'API
        fetch('http://localhost:3000/api').then(data => {
            // Les données sont présentes => renvoyer une Promise de type 'resolve'
            if (data.ok) { return Promise.resolve(data) }

            // Les données sont présentes => renvoyer une Promise de type 'reject'
            else { return Promise.reject(new Error('Problème dans la requête')) }
        })

        // Formater la réponse en JSON
        .then( data => data.json() )

        // Manipuler les données de la réponse
        .then(data =>  {
            // Afficher le résultat dans la DOM
            document.querySelector('#apiResponse').textContent = 'Nom : '+ data.username +' / Password : '+ data.password
        })

        // Capter l'erreur
        .catch((err) =>  console.error(err) );
        
    });
//