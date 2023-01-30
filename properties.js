var shoppingCart ={
    books : 8,
    sunglass: 1,
    pen:5,
    mobile: 2,
    table:1,
    picture: 3
}
// when you know the specific parameter use dot notation.
var mobileCount = shoppingCart.mobile;
// alternative system
var mobileCount2 = shoppingCart['mobile'];
// find out the key properties in the object
var properties =Object.keys(shoppingCart);
console.log(properties);
// find out the value properties in the object
var properties2 = Object.values(shoppingCart)
console.log(properties2);

// another way to find properties and value

var propertiesName ='picture'
var propertiesValue = shoppingCart[propertiesName];
console.log(propertiesName,propertiesValue);
 
// console.log(mobileCount2);
