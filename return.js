function addition(number1, number2) {


    var sum = number1 + number2;

    return sum;
}

var total = addition(50, 55);
// console.log(total)

function bringSingara(money) {
    var singaraPrice = 6;
    var quantity = money / singaraPrice;

    return parseFloat(quantity.toFixed(1));

}

var allTaka = 100;
var totalCost = bringSingara(allTaka)
console.log(totalCost);