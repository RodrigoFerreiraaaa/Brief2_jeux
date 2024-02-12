export default class Fond {
    #couleur;
    #id;
    constructor(couleur = "blue") {
        this.id = this.idAleatoire();
        this.couleur = couleur;

        this.creerHTML()
    }


    get couleur() {
        return this.#couleur
    }

    set couleur(couleur) {
        this.#couleur = couleur
    }


    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }
    ////////////    METHODE
    idAleatoire() {
        return Math.floor(Math.random() * 1000000000);
    }

    creerHTML() {
        let affichage = document.querySelector('#grille');
        let grille = document.createElement('div');
        grille.classList.add('grille');
        grille.id = this.id;
        affichage.appendChild(grille)
    }
}
