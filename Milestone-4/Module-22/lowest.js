const phones = [
    {name: 'Samsung', camera: '12 MB', price: 20000, color: 'blue'},
    {name: 'nokia', camera: '12 MB', price: 2000, color: 'blue'},
    {name: 'MI', camera: '12 MB', price: 18000, color: 'blue'},
    {name: 'iphone', camera: '12 MB', price: 200000, color: 'blue'}
];

function lowestPhone(phones){
    let lowest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];

        if(phones.price < lowest.price){
            lowest = phone;
        }
    }
    return lowest;

}
const mySelection = lowestPhone(phones);
console.log(mySelection);