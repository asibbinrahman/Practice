/* function factorial(number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * 1;
    }
    return result;
}

const result = factorial(9);
console.log(result); */


// Factorial Reverse

/* function factorial(number){
    let result = 1;
    for(let i = number; i >=1; i--){
        result = result * i; 
        console.log(i);
    }
    return result;
}

const fact = factorial(5);
console.log(fact);
 */

// Factorial While Loop

function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return result;

}

const fact = factorial(2);
console.log(fact);