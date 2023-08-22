
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = "";

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const depositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = depositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalance;

    
})