/*  function getSum(numbers){
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
 }

 const myNumbers = [12, 20, 31, 25, 50, 83];
 getSum(myNumbers); */


 function getOddNumbers(numbers){
    const oddNumbers = [];
    for(var i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element,); 
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
 }

const myNumbers = [12, 20, 31, 25, 50, 83, 75];
 const oddNumbers = getOddNumbers(myNumbers);
 console.log(oddNumbers);
 const sum = getOddNumbers(oddNumbers);
 console.log(sum);
