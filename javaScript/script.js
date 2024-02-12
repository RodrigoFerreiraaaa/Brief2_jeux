import Grille from "./Grille.js"
import Fond from "./Fond.js";

let tableauFond = [];

tableauFond.push(new Fond());

let tableauGrille = [];

tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());
tableauGrille.push(new Grille());


console.log(tableauFond);
console.log(tableauGrille);




let boolean = false;

tableauGrille.forEach(rond => {
    rond.emplacement.addEventListener('click', () => pieces(rond));
});

function pieces(rond) {
    // Vérifie si l'emplacement a déjà la classe "red" ou "yellow"
    if (!rond.emplacement.classList.contains('red') && !rond.emplacement.classList.contains('yellow')) {
        // Inverse la valeur de boolean à chaque clic
        boolean = !boolean;
        // Supprime toutes les classes existantes
        rond.emplacement.classList.remove('red', 'yellow');
        // Applique la nouvelle classe en fonction de la valeur de boolean
        if (boolean) {
            rond.emplacement.classList.add('red');
        } else {
            rond.emplacement.classList.add('yellow');
        };
        verifierVictoire();
    }
}

function verifierVictoire() {

}