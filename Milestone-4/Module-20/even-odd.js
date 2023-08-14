function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}


const myNumber = isEven(51);
console.log(myNumber);
const herNumber = isEven(501);
console.log(herNumber);