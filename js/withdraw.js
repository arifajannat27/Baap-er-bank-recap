/*
1. add event handler with the withdraw button
2. get the withdraw amount;
2.5 convert string withdraw amount to a number type
3. clear the withdraw input field after getting the value
4. get the previous withdraw total
5. calculate new deposit total and set value to the deposit total
6. get total balance
*/ 

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    // step-3
    withdrawField.value = '';

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    // console.log(PreviousBalanceTotal);

    // step-7
    const newBalanceTotal = PreviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})