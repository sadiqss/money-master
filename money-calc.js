
//Getting Input value
function getInputValue(user) {
    const userInputText = document.getElementById(user + '-credit');
    const userInputValue = parseFloat(userInputText.value);
    // userInputText.value = '';
    return userInputValue;
}

//Expense calculation
function expenseCalc() {
    const userIncome = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rentExpense = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');
    if ((isNaN = userIncome || userIncome == 0) && (isNaN = foodExpense || foodExpense == 0) && (isNaN = rentExpense || rentExpense == 0) && (isNaN = clothesExpense || clothesExpense == 0)) {
        if ((userIncome >= 0 && foodExpense >= 0) && (rentExpense >= 0 && clothesExpense >= 0)) {
            const totalExpense = foodExpense + rentExpense + clothesExpense;
            const totalBalance = userIncome - totalExpense;
            if (userIncome >= totalExpense) {
                //update on the html
                document.getElementById('total-expense').innerText = totalExpense;
                document.getElementById('total-balance').innerText = totalBalance;
            }
            else {
                alert('Please spend wisely! Your balance is too low!')
            }
        }
        else {
            alert('Please Insert POSITIVE!! value');
        }
    }
    else {

        alert('PLEASE ENTER VALID NUMBER!!');
    }



}
//saving calculation
function savePercentage() {
    const savePercentText = getInputValue('save');
    const savePercent = parseFloat(savePercentText);
    if (isNaN = savePercent) {
        if (savePercent >= 0 && savePercent <= 100) {
            const saveFraction = savePercent / 100;
            const saveAmount = getInputValue('income') * saveFraction;
            const balanceAfterExpense = document.getElementById('total-balance').innerText;
            const remainingBalance = balanceAfterExpense - saveAmount;
            if (saveAmount <= balanceAfterExpense) {
                //update on the html
                document.getElementById('saving-amount').innerText = saveAmount;
                document.getElementById('remaining-amount').innerText = remainingBalance;

            }
            else {
                alert('Alas! You do not have enough money to save');
            }

        }
        else {
            alert('Please Enter right percentage!')
        }
    }
    else {
        alert('Please Enter a valid Number!!');
    }

}
// calculate handler
document.getElementById('expense-calculate').addEventListener('click', function () {
    expenseCalc();
})

//save handler

document.getElementById('save-calculation').addEventListener('click', function () {
    savePercentage();
})