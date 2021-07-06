'use strict';
var json_products = '[{"name":"bateau","img":"https://picsum.photos/id/642/150/150","price":50000,"decription":" Qui ex eu eiusmod velit non.","stock":3,"dimension":[{"size":"40 pieds"},{"tons":"40 tonneaux"},{"speed":"40 noeuds"}]},{"name":"sous marin","img":"https://picsum.photos/id/341/150/150","price":2500000,"decription":"Sint consequat aute eiusmod aute id proident magna.","stock":3,"dimension":[{"size":"70 pieds"},{"tons":"50 tonneaux"},{"speed":"70 noeuds"}]},{"name":"voilier","img":"https://picsum.photos/id/642/150/150","price":40,"decription":"Est sint incididunt deserunt anim amet cupidatat minim sint mollit.","stock":3,"dimension":[{"size":"25 pieds"},{"tons":"2 tonneaux"},{"speed":"2 noeuds"}]}]';

var products = JSON.parse(json_products);
function onproductclick(product) {
    console.log(product);
    alert('produit cliqué :');
}

/**
 * ADD product count a end of list of product
 */
function addCountProduct() {
    
var divCount = document.createElement('div');
divCount.id="count-product";
divCount.innerHTML = 'Count : ' + (products.length + 1);
document.querySelector("#list").append(divCount);

    
}



console.log(products);

var templatelistItem = document.querySelector('.list-produit');
products.forEach(function (element, index, list) {
    console.log(index, element);
    //duplication d'elem du dom pour manip
    var elemTmpl = templatelistItem.cloneNode(true);


    var img = elemTmpl.querySelector('img');

    img.src = element.img;
    //ajout ds element cloné

    elemTmpl.querySelector('h2').innerHTML = element.name;
    elemTmpl.querySelector('h3').innerHTML = 'stock : ' + element.stock;
    elemTmpl.addEventListener('click', onproductclick);

    document.querySelector("#list").append(elemTmpl);
});


//interdit sur des conteneurs d'ensemble avec des events dans les enfants
//document.querySelector("#list").innerHTML+='Count : ' + (products.lenght+1);

addCountProduct();