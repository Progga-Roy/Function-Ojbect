// array vs object

var shoppingItems = ['books', 'blankets', 'showcase', 'mask', 'id_card'];
var itemsPrice = [350, 1500, 200, 10, 500];
var itemsNamePrice = {
    books: 350,
    blankets: 1500,
    showcase: 200,
    mask: 10,
    id_card: 500,

}

var shoppingCart = {
    books: 8,
    sunglass: 1,
    pen: 5,
    mobile: 2,
    table: 1,
    picture: 3,
    fan: 2

}


var key= Object.keys(shoppingCart);
console.log(key)
var value = Object.values(shoppingCart)
console.log(value)

for (var i = 0; i < key.length; i++) {
    var propertiesName = key[i];
    var propertiesValue = shoppingCart[propertiesName]
    // console.log(propertiesName,propertiesValue)
    
}

// for in loop
for( var propertiesName in shoppingCart){
    var value = shoppingCart[propertiesName];
    console.log(propertiesName,value);
}