/* function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
    // console.log(sum);
    // return;
}

// add(20, 30);
var total = add(50, 60);
console.log('total', total);  */

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(150);
console.log('Eating Singara', singaras);