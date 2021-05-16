function exp() {
    var num1 = Number(document.getElementById('ex').value);
    var num2 = Number(document.getElementById('pre').value);

    var expamount = document.getElementById('expensesAmount').innerHTML = num1+num2;
}

function budg() {
    var num1 = Number(document.getElementById('ex').value);
    var num2 = Number(document.getElementById('pre').value);
    var budget = Number(document.getElementById('to').value);

    var expamount = document.getElementById('expensesAmount').innerHTML = num1+num2;

    document.getElementById('balanceAmount').innerHTML = budget-expamount;
}

function budget() {
  document.getElementById("budgetAmount").innerHTML = 
    document.getElementById('to').value;
}

function pr() {
  document.getElementById("result").innerHTML = document.getElementById('da').value + ", " +
    document.getElementById('ca').value + ", $" +
    document.getElementById('ex').value;
}
