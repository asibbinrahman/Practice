/* function printInfo(name){
    console.log('Valo hoe jaw', name)
}

printInfo('Masud')
printInfo('15') */




// add two numbers
/* function add(x,y){
    add = x + y;
    return add;
}

const result = add(5,7);
console.log(result); */




// Function type
/* 1. no perameters + no return
2. perameters + no return
3. no perameters + return
4. perameters + return */



// 1. no perameters + no return

/* function show(){
    console.log('Hello');
}
show(); */


// 2. perameters + no return

/* function add(x, y){
    console.log(x + y);
}

add(7,5) */


// 3. no perameters + return

/* function givenMoney(){
    const money = 500;
    console.log(money);
}

givenMoney(); */


// 4. perameters + return

/* function multi(a, b){
    const result = a * b;
    return result; 
}

const total = multi(2,3);
console.log(total); */




// For loop

/* function sumOdArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;

}

const number = [1,2,3,4,5];
const total = sumOdArray(number);
console.log(total); */


// For of loop

/* function sumOdArray(arr){
    let sum = 0;
    for(let item of arr){
        sum = sum + item;
    }
    return sum;

}

const number = [1,2,3,4,5];
const total = sumOdArray(number);
console.log(total); */



// Sum of Odd Numbers

/* function sumOfOdd(arr){
    sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            sum = sum + arr[i];
        }
    }
    return sum;
}
const numbers = [1,2,3,4,5,6,7,8,9,10,11];
const total = sumOfOdd(numbers);
console.log(total); */


// Sum of Even Numbers

/* function sumOfEven(arr){
    sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}
const numbers = [1,2,3,4,5,6,7,8,9,10,11];
const total = sumOfEven(numbers);
console.log(total); */
//---------------------------------------------------------------------------------------------------------

/* function information (info){
    const sentence = 'My Name is ' + info.name + ', I am from ' + info.Address + ', I am ' + info.age + ' years old.'
    return sentence;
}

const myInfo = {
    name: 'Asif',
    Address: 'Barisal',
    age: 28
}

console.log(information(myInfo)); */

//-----------------------------------------------------------------------------------------------------------

// Factorial for loop

// 5! = 5*4*3*2*1

/* const number = 6;
let result = 1;

for(let i = number; i >= 1; i--){
    result = result * i;
}

console.log(result); */


// Factorial Function

/* function factorial(number){
    if(number === 1 || number === 0){
        return 1;
    }

    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}

console.log(factorial(3)); */


// Find the largest number in an array

/* function largestNumber(x){
    let largest = x[0];
    for(let i = 1; i < x.length; i++){
        const currentItem = x[i];
        if(currentItem > largest){
            largest = currentItem;
        }
    }
    return largest;
}

const arr = [12,5,8,18,20,40,57,75,33];
console.log(largestNumber(arr)); */



// Find the largest name in an array

/* function biggestName(friends){
    let biggest = friends[0];

    for( i = 1; i < friends.length; i++){
        const CurrentName = friends[i];
        if(CurrentName.length > biggest.length){
            biggest = CurrentName;
        }
    }
    return biggest;
}

const friends = ['Rana', 'Iqbal', 'MahidHasan', 'forhad', 'abirHasan'];
console.log(biggestName(friends)); */




// Validation

/* function add(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please give me a number';
    }
    return a+ b;
}

console.log(add(4,2)); */


// Validation for Array

/* function sumOdArray(arr){
    if(!Array.isArray(arr)){
        return "please give me an array";
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;

}

const number = [1,2,3,4,5];
const total = sumOdArray(number);
console.log(total); */

// Find vowel and consonant


function vowelNumbers(s){
    if (typeof s !== 'string'){
        return 'please give me a string'
    }
    let vowel = 0;
    let consonant = 0;
    let space = 0;
    let vowelArray = [];
    let consonantArray = [];

    for(let i = 0; i < s.length; i++){
        let char = s[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowel++;
            vowelArray.push(char)
        }
        else if(char !== " "){
            consonant ++;
            consonantArray.push(char)
        }
        else{
            space ++;
        }

    }
    
    const obj = {
        vowelCount: vowel,
        consonantCount: consonant,
        spaceCount: space,
        vowelArray: vowelArray,
        consonantArray: consonantArray
    }

    return obj;
}


const sentence = "the name of our Country is bangladesh. it is a beautiful country"
console.log(vowelNumbers(sentence));













