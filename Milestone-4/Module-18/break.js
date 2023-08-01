/* for(var i = 1; i < 20; i++){
    console.log(i);
    if(i > 5){
        break;
    }
} */

/* var rostGiven = 0;
while(rostGiven < 10){
   console.log('roast Den');
   rostGiven++;
   if(rostGiven > 4){
    break;
   }
} */

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'nootbook'];
for (var i = 0; i <= items.length; i++){
    var item = items[i];
    if(item == 'mouse'){
        break;
    }
    console.log(item);
}