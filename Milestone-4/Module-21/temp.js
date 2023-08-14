let first = 5;
let second = 7;

console.log(first,second);

// wrong Approach

// first = second;
// second = first;


// Approach 1

// let temp = first;

// first = second;
// second = temp;


// Approach 2

[first, second] = [second, first]

console.log(first,second);
