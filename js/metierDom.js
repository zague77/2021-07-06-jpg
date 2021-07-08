import RestArray from './metier.js'
import { RESSOURCES } from './fetch.js'

export class DOMProducts extends RestArray {
    filtreArray;
    #DOMListSelector;
    constructor(DOMListSelector) {
        super('products', RESSOURCES.products);
        this.#DOMListSelector=DOMListSelector;
        this.loadFromRest()
            .then((values) => {
                //en ES6
                this.filtreArray = [...values]
                //Object.assign([], values) en ES5
                this.showResults()
            })
    }


    showResults() {
        const list = document.querySelector(this.#DOMListSelector);
        list.innerHTML = '<h2>Liste des produits</h2>' //erase tout
        this.filtreArray.map((value, index) => {
            const domproduct = new DOMProduct(value);
            const domproductnode = domproduct.makeSearchView();
            domproductnode.addEventListener('click', this.onresultclick)
            list.append(domproductnode);
        })
    }


    makeSearch(serachedName) {
        this.filtreArray = this.filter((value, index) => value.name.includes(serachedName))
        this.showResults();

    }

    //function : perte de contexte
    onresultclick=(evt)=>{
        console.log(evt);
        //const id=this.id.substring(7); 
        const id=evt.target.id.substring(7); //on délegue qui y va
        console.log(id);
        const prodclick = this.find((value, index) => value.id===Number(id))
        console.log(prodclick);
    }

}


class DOMProduct {
    product
    constructor(product) {
        this.product = product;
    }

    //wcag : 1A , accès du site (contrainte à mettre en place)

    makeSearchView() {
        const div = document.createElement('div');
        div.className = 'list-produit';
        div.id="result-"+this.product.id;

        //img
        const img = document.createElement('img');
        img.src = this.product.img;
        div.append(img);

        //content text
        const divcontent = document.createElement('div');
        divcontent.className = 'list-produit-content';
        div.append(divcontent);

        //content text
        const h2 = document.createElement('h2');
        h2.innerHTML = this.product.name;
        divcontent.append(h2);

        //h3 stock
        const h3 = document.createElement('h3');
        //text align 
        h3.style.textAlign = 'center';
        h3.style.fontWeight = '900';
        h3.innerHTML = `stock : ${this.product.stock}`;
        divcontent.append(h3);


        return div;
    }

}