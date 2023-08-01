var numbers = [45, 20, 38, 50, 100, 81,75,10, 31, 22];

for(var i = 0; i < numbers.length;
    i++){
   var number = numbers[i];
   if(number > 50){
    continue;
   }
   console.log(number);
    }