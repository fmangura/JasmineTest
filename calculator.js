window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const inValues = { amount: 1000, years: 5, rate: 2 };
  let amountUI = document.getElementById("loan-amount");
  amountUI = inValues.amount;
  let yearsUI = document.getElementById("loan-years");
  yearsUI = inValues.years;
  let rateUI = document.getElementById("loan-rate");
  rateUI = inValues.rate;

  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const curruentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(curruentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyInterestRate = (values.rate / 100) / 12;
  const numPayments = values.years * 12
  const monthlyPayment = (values.amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = `$${monthly}`;
}
