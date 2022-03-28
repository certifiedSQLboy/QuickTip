let container = document.querySelector('#container');

container.addEventListener('input', update);

function update(){
 
  let bill = Number(document.querySelector('#yourBill').value);
  let tip = document.querySelector('#tipInput').value;
  let split = document.querySelector('#splitInput').value;

  let tipValue = bill * (tip / 100);//calculate the total tip
  let tipEach = tipValue / split;//calculate tip per person
  let totalWithTip = bill + tipValue;//calculate the total bill with tip included
  let billEach = totalWithTip / split;//calculate bill per person
  
  document.querySelector('#tipPercent').innerHTML = tip + '%';
  document.querySelector('#tipValue').innerHTML = formatCurrency(tipValue);
  document.querySelector('#totalWithTip').innerHTML = formatCurrency(totalWithTip);
  document.querySelector('#splitValue').innerHTML = formatSplit(split);
  document.querySelector('#billEach').innerHTML = formatCurrency(billEach);
  document.querySelector('#tipEach').innerHTML = formatCurrency(tipEach);
  
}

//format the currency.
function formatCurrency(value){
   value =  Math.ceil(value * 100) / 100
    return "$ " + value.toFixed(2);
}

//format the split in people
function formatSplit(value){
   return value > 1 ? value + " people" : value + " person";
}