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
        reset();
    }
}





























































function verifierVictoire() {
    if (verifierDiagonales() || verifierLignes() || verifierColonnes()) {
        alert("VICTOIRE!")
    }
}

function verifierLignes() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            const cellules = [
                tableauGrille[i * 7 + j],
                tableauGrille[i * 7 + j + 1],
                tableauGrille[i * 7 + j + 2],
                tableauGrille[i * 7 + j + 3]
            ];
            if (verifierQuatreCellules(cellules)) {
                return true;
            }
        }
    }
    return false;
}

function verifierColonnes() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 3; j++) {
            const cellules = [
                tableauGrille[j * 7 + i],
                tableauGrille[(j + 1) * 7 + i],
                tableauGrille[(j + 2) * 7 + i],
                tableauGrille[(j + 3) * 7 + i]
            ];
            if (verifierQuatreCellules(cellules)) {
                return true;
            }
        }
    }
    return false;
}



function verifierDiagonales() {
    for (let i = 0; i < 6; i++) { // Vous devez ajuster la taille de votre grille ici
        for (let j = 0; j < 7; j++) { // Vous devez ajuster la taille de votre grille ici
            // Vérification de la diagonale descendante (de gauche à droite)
            if (j < 4) {
                const cellulesDescendantes = [
                    tableauGrille[i * 7 + j],
                    tableauGrille[(i + 1) * 7 + j + 1],
                    tableauGrille[(i + 2) * 7 + j + 2],
                    tableauGrille[(i + 3) * 7 + j + 3]
                ];
                if (verifierQuatreCellules(cellulesDescendantes)) {
                    return true;
                }
            }

            // Vérification de la diagonale montante (de gauche à droite)
            if (j > 2) {
                const cellulesMontantes = [
                    tableauGrille[i * 7 + j],
                    tableauGrille[(i + 1) * 7 + j - 1],
                    tableauGrille[(i + 2) * 7 + j - 2],
                    tableauGrille[(i + 3) * 7 + j - 3]
                ];
                if (verifierQuatreCellules(cellulesMontantes)) {
                    return true;
                }
            }
        }
    }
    return false;
}


function verifierQuatreCellules(cellules) {
    // Vérifie si quatre cellules ont la même couleur non vide
    const couleur = cellules[0].emplacement.classList.item(1); // Obtient la couleur de la première cellule
    return (
        couleur &&
        cellules.every(cellule => cellule.emplacement.classList.contains(couleur))
    );
}

function reset() {
    tableauGrille.forEach(element => {
        element.emplacement.classList.remove("red")
        element.emplacement.classList.remove("yellow")
    });
}