
// Step -1:
document.getElementById('btn-deposite').addEventListener('click', function(){
    // Step-2:
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    //step-3:
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const currentDepositeAmount = previousDepositeTotal + newDepositeAmount;
    //Step-4:
    depositeTotalElement.innerText = currentDepositeAmount;
    //Step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //Step-6:
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear Deposite Field
    depositeField.value = " ";
})