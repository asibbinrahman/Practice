function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairWood = chairQuantity * perChair;
    const tableWood = tableQuantity * perTable;
    const bedWood = bedQuantity * perBed;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(2,5,2);
console.log('totalWood');