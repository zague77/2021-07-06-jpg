
//es6
//es6 , on met plus ";"
/**
 * 
 */
class Product {
    price;
    #name;
    #id;

    /***
     * @param {number} id value of Id
     * @param {string} name value of name
     * @param {number} price value of price
     */
    constructor(id, name, price) {
        this.price = price;
        this.#name = name;
        this.#id = id;
    }

    /**
     * return Id
     * @returns (string) value of name
     */
    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    set id(value){
        this.#id = value;
    }

    set name(value){
         this.#name = value;
    }


    //private function
    /**
     * make a discount d'une fonction
     * @param {number} pcent 
     */
    #_makeDiscount(pcent){
        this.price = (this.price - (this.price * (pcent / 100))).toFixed(2);
    }

 

     tojsonString(){
        return JSON.stringify(
                Object.assign({name:this.#name, id:this.#id},this));
    }

    makediscount=this.#_makeDiscount

 

}


class Boat extends Product{
    #_dimensions=[]
    constructor(id,name,price){
        super(id,name,price);
    }

    addDimension=(dimension)=>{
        this.#_dimensions.push(dimension);
    }

        get dimension(){
            return this.#_dimensions;
        }
}

