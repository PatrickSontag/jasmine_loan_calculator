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
  let inputAmount = document.getElementById("loan-amount");
  let inputYears = document.getElementById("loan-years");
  let inputRate = document.getElementById("loan-rate");
  console.log("input values: ", inputAmount, inputYears, inputRate);
  calculateMonthlyPayment(inputAmount.value, inputYears.value, inputRate.value);
  //  return {
    // amount: +(document.getElementById("loan-amount").value),
    // years: +(document.getElementById("loan-years").value),
    // rate: +(document.getElementById("loan-rate").value),
  // }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.setAttribute("value", "10000");
  loanYears.setAttribute("value", "5");
  loanRate.setAttribute("value", ".04");
  console.log("Amount: ", loanAmount.value);
  console.log("Years: ", loanYears.value);
  console.log("Rate: ", loanRate.value);
  
  calculateMonthlyPayment(loanAmount.value, loanYears.value, loanRate.value)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // console.log("UI Values: ", getCurrentUIValues());
  getCurrentUIValues();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amt, yrs, rte) {
  let periodicRate = rte / 12;
  let totalPayments = yrs * 12;
  const exactPayment = (amt * periodicRate)/(1 - (1 + periodicRate) ** -totalPayments);
  const monthlyPayment = Math.floor(exactPayment * 100) / 100;
  console.log("monthly payment (calculate): ", monthlyPayment.toString());
  
  updateMonthly(monthlyPayment.toString());
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  console.log("monthly-payment (update): ", payment);
  payment.innerText = "$" + monthly;
}
