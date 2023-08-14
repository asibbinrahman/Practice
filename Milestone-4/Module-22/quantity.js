const shoppingCart = [
    {name: 'shirt', price: 2500, quantity: 5},
    {name: 'pant', price: 3000, quantity: 2},
    {name: 'shoe', price: 1000, quantity: 4},
    {name: 'belt', price: 500, quantity: 1}
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total Expense today:', expense);