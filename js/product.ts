
import Fetch from './fetch'


export default class ProductTs {
    public dimensions?: [{} | string]|undefined;

    constructor(private id: number,
        public name: string,
        public price: number,
        public description: string | number,
        dimensions?: [{} | string]
        // public dimensions: Array<any>
        // public dimensions:[object]
    ) {
        this.dimensions = dimensions
        console.log(this);
    }
}

//export class Products extends Array<Object>{
export class ProductsTs extends Array<ProductTs>{
    constructor() {
        super();
    }
}


let product: ProductTs = new ProductTs(0,
     'Zodiax',
      100_000, 
      'Huge Zod', 
      [{    speed: '25 noeuds'},],);
//, et rien qui suit : permet de commenter

const products:ProductsTs=new ProductsTs();
products.push(product);
products.push(product);

console.log(products,product);

