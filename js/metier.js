function Product(id, name, price) {
    //champ prive
    var _id = id;
    var _price = price;
    //champ public disponible depuis extérieur
    this.name = name;

    //getter setter
    this.getPrice=function(){return _price;}

    this.setPrice=function(value){
        if(isNaN(value)){_price=value;} 
    }



    function _makeDiscount(pcent) {
        _price = (_price - (price * (pcent / 100))).toFixed(2);
    }

    //function privée
    _makeDiscount(10);


    //exposition d'un fonction pricée
    this.makediscount=_makeDiscount;


}
var produit = new Product(0, 'zodiac', 100000)
var produit2 = new Voilier(0, 'zodiac', 100000)
console.log(produit)


produit.makediscount(10);
console.log(produit.getPrice()+'$');