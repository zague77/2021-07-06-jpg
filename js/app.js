// ES6
// limitation au niveau module


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

const produits= new DOMProducts('#list');
function onsearchchange(evt){
    const searcval=evt.target.value;
    produits.makeSearch(searcval);
}   


function initDomEvent(){
    document.querySelector('#finder input').addEventListener('input', onsearchchange);
}

initDomEvent()



