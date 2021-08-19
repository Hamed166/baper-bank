




document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-input');
    const depositInput = depositAmount.value;
    const newDepositInput = parseFloat(depositInput);
    depositAmount.value = '';

    const depositTotal = document.getElementById('totalDeposit');
    const currentDepositTotal= depositTotal.innerText;
    const newDepositTotal = parseFloat(currentDepositTotal);
    const totalDeposit = newDepositInput + newDepositTotal;
    depositTotal.innerText = totalDeposit;

    const balanceTotal = document.getElementById('bankBalance');
    const bankBalance = balanceTotal.innerText;
    const newBankBalance = parseFloat(bankBalance);
    const totalBankBalance = newDepositInput + newBankBalance;
    balanceTotal.innerText = totalBankBalance;


    // withdraw part js starts

    document.getElementById('withdraw-button').addEventListener('click',function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawValue = withdrawInput.value;
        const newWithdrawInput = parseFloat(withdrawValue);
        withdrawInput.value = '';


        const withDrawTotal = document.getElementById('totalWithdraw');
        const newWithdrawTotal = withDrawTotal.innerText;
        const finalWithdrawTotal = parseFloat(newWithdrawTotal);
        const totalWithdraw = finalWithdrawTotal + newWithdrawInput;
        withDrawTotal.innerText = totalWithdraw;


        const myBankBalance = document.getElementById('bankBalance');
        const myFinalBankBalance = myBankBalance.innerText;
        const totalBankBalance = parseFloat(myFinalBankBalance);
        const bankActualBalance = totalBankBalance - newWithdrawInput;
        myBankBalance.innerText = bankActualBalance;

    })
   
})