

function getInputValue(user) {
    const userInputText = document.getElementById(user + '-credit');
    const userInputValue = parseFloat(userInputText.value);
    userInputText.value = '';
    return userInputValue;
}
function expenseCalc() {
    const userIncome = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rentExpense = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');
    if ((isNaN = userIncome || userIncome == 0) && (isNaN = foodExpense || foodExpense == 0) && (isNaN = rentExpense || rentExpense == 0) && (isNaN = clothesExpense || clothesExpense == 0)) {
        if ((userIncome >= 0 && foodExpense >= 0) && (rentExpense >= 0 && clothesExpense >= 0)) {
            const totalExpense = foodExpense + rentExpense + clothesExpense;
            const totalBalance = userIncome - totalExpense;
            //update on the html
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('total-balance').innerText = totalBalance;
        }
        else {
            alert('Please Insert positive value');
        }
    }
    else {

        alert('Please insert valid number');
    }



}

document.getElementById('expense-calculate').addEventListener('click', function () {
    expenseCalc();
})