// Effectue une requête pour récupérer la donnée
fetch('../data.json')
    .then((rep) => {
        // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
        return rep.json();
    })
    .then(donnee => {
        // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça focntionen bien)
        console.log(donnee);

        // Parcourt chaque produit dans le tableau de données
        donnee.forEach(product => {
            // Appelle la fonction 'afficher' pour afficher les informations du produit dans la page HTML
            afficher(product);
        });
    });

//role: afficher les recettes
//parametre: recettes et etapes

function afficher(recette) {
    let difficulte = recette.difficulte
    let tempsDePreparation = recette.tempPreparation
    let tempsDeCuisson = recette.tempCuisson
    let portions = recette.portions
    let nom = recette.nom
    let image = recette.img
    let template =`      <div class="recette">
                <h3 class="titreContainer">${nom}</h3>
                <div class="container">
                    <ul class="flex">
                        <li class="li">Difficulté: ${difficulte}</li>
                        <li class="li">Portion: ${portions}</li>
                        <li class="li">Temps de préparation: ${tempsDePreparation}</li>
                        <li class="li">Temps de cuisson: ${tempsDeCuisson}</li>
                    </ul>
                </div>
                <div> <!--parent -> ingredients et etapes-->
                    <div class="flex container"> <!--ingredients-->
                        <h4>Ingrédients:</h4>
                        <ol class="container">
                         

                        </ol>
                    </div>
                    <div class="container flex">
                        <!--etapes-->
                        <h4>Etapes:</h4>
                        <ol class="container">
                            
                        </ol>
                        <div class="container">
                            <img src="${image}"
                                class="tailleImg" alt="">
                        </div>
                    </div>
                </div>`






    let ingredients = recette.ingredients //ceci est un tableau
    let zone= document.querySelector("#zone")
    zone.innerHTML += template
}