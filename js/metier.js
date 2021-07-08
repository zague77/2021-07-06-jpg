const REST_BASE_URL = 'localhost:5679'
import Fetch,{RESSOURCES,BASE_SRV_URL} from './fetch.js';
export default class RestArray extends Array {
    ressourceName
    ressourceEndpointUrl
    constructor(ressourceName,ressourceEndpointUrl){
        super();
        this.ressourceEndpointUrl=ressourceEndpointUrl;
        this.ressourceName=ressourceName;
    }
    initFromJson(jsonStr){
        const inputArray=JSON.parse(jsonStr);
        inputArray.map((elem,index) => {
            this.push(elem);
        });
    }
    cleanArray(){
        this.splice(0,this.length);
    }
    loadFromRest()
    {
      //  this.cleanArray();
        const f=new Fetch(`${BASE_SRV_URL}`);
        return f.get(this.ressourceEndpointUrl,(restContent) => {
            if(Array.isArray(restContent))
            {
                restContent.map((value, index) => {
                    this.push(value);
                })
            }
        })
    }
}
export class Product {
    static TVA = { ALIM: 5.5, NON_ALIM: 20.6 }
    static RESSOURCE_NAME = '/products'
    price
    #name
    #id
    tva
    /**
     * cosntructor of product
     * @param {number} id value  of id
     * @param {string} name value of name
     * @param {number} price value of price
     */
    constructor(id, name, price) {
        this.#id = id;
        //if (undefined === name && undefined === price) this.#_loading();
        //else {
        this.price = price
        this.#name = name;
        this.tva = Product.TVA.ALIM;
        //}
    }
    /**
     * rest load with an id
     */
    #_loading() {
        const ressourceUrl = `http://${REST_BASE_URL}${Product.RESSOURCE_NAME}/${this.#id}`
        const promise = fetch(ressourceUrl);
        promise.then(
            (response) => { return response.json() },
            (unsuccessResponse) => { console.error('Une errur de chargement') }
        ).then((obj) => {
            console.log(obj);
            this.loadValues(this.#id,obj.name,obj.price);
            return obj;
        })
      
    }
    /**
     * return id
     * @returns {number} value of id
     */
    get id() {
        return this.#id;
    }
    /**
     * return name
     * @returns {string} value of name
     */
    get name() {
        return this.#name;
    }
    /**
     * set name
     * @param {string} value new value of name
     */
    set name(value) {
        this.#name = value;
    }
    //private functions
    /**
     * make a discount on product price
     * @param {number} pcent 
     */
    #_makeDiscount(pcent) {
        this.price = (this.price - (this.price * (pcent / 100))).toFixed(2);
    }
    tojsonString() {
        return JSON.stringify(Object.assign({ name: this.#name, id: this.#id }, this));
    }
    makediscount = this.#_makeDiscount
    loadBasicValues=(id,name,price)=>{
        this.#name = name;
        this.price = price;
        this.#id=id;
    }
}

export class Boat extends Product {
    #_dimensions = []
    constructor(id, name, price) {
        super(id, name, price);
        this.#_loading();
    }
    addDimension = (dimension) => {
        this.#_dimensions.push(dimension);
    }
    get dimensions() {
        return this.#_dimensions;
    }
    #_loading() {
        const ressourceUrl = `http://${REST_BASE_URL}${Product.RESSOURCE_NAME}/${this.id}`
        const promise = fetch(ressourceUrl,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            },
            
        });
        promise.then(
            (response) => { return response.json() },
            (unsuccessResponse) => { console.error('Une errur de chargement',unsuccessResponse) }
        ).then((obj) => {
            console.log(obj);
            
            this.loadBasicValues(this.id,obj.name,obj.price);
            this.#_dimensions=obj.dimensions
            return obj;
        })
    }
}
