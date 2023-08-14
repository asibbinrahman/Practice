const shoppingCart = [
    {name: 'shirt', price: 2500},
    {name: 'pant', price: 3000},
    {name: 'shoe', price: 1000},
    {name: 'belt', price: 500}
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total Expense today:', expense);