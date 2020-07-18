const readline = require("readline-sync")
function prompt(message) {
  console.log(`=> ${message}`)
}
prompt("Welcome to the Mortgage / Car Loan Calculator!")

//ask the user for the loan amount

prompt("How much money are you looking to borrow?: ")
let loanAmount = readline.question();


// get duration

prompt("What is the duration of the loan that you are looking for? (in months):")
let loanDuration = readline.question();


// get annual percentage rate(apr) - ask for credit score - the APR will be based on this
prompt("Please enter your credit score: ")
let creditScore = readline.question()


// monthly interest rate
let monthlyInterestRate;


if (creditScore > 680) {
  monthlyInterestRate = 3.183
} else if (creditScore >= 660 && creditScore <= 679) {
  monthlyInterestRate = 3.397
} else if (creditScore >= 640 && creditScore <= 659) {
  monthlyInterestRate = 3.827
} else if (creditScore >= 620 && creditScore <= 639) {
  monthlyInterestRate = 4.373
} else {
  monthlyInterestRate = 5.000
}
//monthly interest rate is based on year - convert to monthly 

monthlyInterestRate = (monthlyInterestRate / 100) / 12
//prompt(`Your monthly interest rate is ${monthlyInterestRate} `) - check to make sure it was working up until now


// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));



prompt(`Based on the information you provided, your monthly payments will be ${monthlyPayment}`)