import RestArray from './metier.js'
import { RESSOURCE } from './fetch.js'

class DOMProducts extends RestArray {
    filtreArray;
    #DOMListId
    cosntructor(DOMListId) {
        super('products', RESSOURCE.products);
        this.loadFromRest()
            .then((values) => {
                //en ES6
                this.filtreArray = [...values]
                //Object.assign([], values) en ES5
                this.showResults()
            })
    }


    showResults()
    {

    }


    makeSearch(serachedName){
        this.filtreArray= this.filter(( value, index) => value.name.includes(serachedName) )
        this.showResults();

    }


    /**
     * Make Repersentation of a Result element
     * @param {Object} value of one element
     * @returns filled DOM element of representate value element
     * 
     */
    makeResult(value){

    }

}