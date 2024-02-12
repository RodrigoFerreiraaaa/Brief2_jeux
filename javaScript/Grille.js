export default class Grille {
    #id;
    constructor() {
        this.id = this.idAleatoire();
        this.creerHTML()
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get emplacement (){
        return document.getElementById(this.id);
    }

    ///////////////////Methode
    idAleatoire() {
        return Math.floor(Math.random() * 1000000000);
    }
    creerHTML() {
        let affichage = document.querySelector('.grille');
        let emplacement = document.createElement('div')
        emplacement.id = this.id;
        emplacement.classList.add('item')
        affichage.appendChild(emplacement)
    }
}







