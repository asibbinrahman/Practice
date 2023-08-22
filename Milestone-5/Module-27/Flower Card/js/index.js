
let total = 0;

function handleClickButton(target){
    const selectedItemsContainer = document.getElementById('selected-items');
   const itemName = target.parentNode.parentNode.childNodes[1].innerText;
   const li = document.createElement('li');
   li.innerText = itemName;
   selectedItemsContainer.appendChild(li);


   const price = target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

   total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText  = total;

    const discount = (total/100)*20;
    document.getElementById('discount').innerText = discount;


}