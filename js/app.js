// ES6
// limitation au niveau module


console.log('%c%s', 'color:green;font-weight:900;font-size:12pt','FORMATION 08-07-2021');

//import classique
/*import { BASE_SRV_URL as REST_URL, RESSOURCES } from './fetch.js';
//export par defaut
import Fetch from './fetch.js';*/
import {DOMProducts} from './metierDom.js'

//example imp def + imp cklassique
//import Fetch, {BASE_SRV_URL as REST_URL, RESSOURCES}  from './fetch.js';


// import RestArray, { Product, Boat } from './metier.js';

//function initialisation de la page

//node possede pas DOM
//differencier métier pure du dom

const products = new DOMProducts('#list');
function onsearchchange(evt) {
    evt.target.style.backgroundColor = "white";

    const regex = /^[a-z]{3,}$/;
    const searchval = evt.target.value;
    if (regex.exec(searchval) === null) {
        if(searchval.length>=3)          evt.target.style.backgroundColor = "tomato";
        return;
    }
    console.log(searchval);
    products.makeSearch(searchval);
}
function initDomEvent() {
    document.querySelector('#finder input').addEventListener('input', onsearchchange)
}
initDomEvent();



