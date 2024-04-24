#! /usr/bin/env node
import inquirer from "inquirer";
//Adding Currency Coversion Object
let currencyConverter = {
    "USD": {
        "USD": 1,
        "PKR": 278.09,
        "GBP": 0.81,
        "EUR": 0.94,
        "INR": 83.35,
    },
    "PKR": {
        "USD": 0.0036,
        "PKR": 1,
        "GBP": 0.0029,
        "EUR": 0.0034,
        "INR": 0.30,
    },
    "GBP": {
        "USD": 1.23,
        "PKR": 343.49,
        "GBP": 1,
        "EUR": 1.16,
        "INR": 102.94
    },
    "EUR": {
        "USD": 1.07,
        "PKR": 296.41,
        "GBP": 0.86,
        "EUR": 1,
        "INR": 88.83,
    },
    "INR": {
        "USD": 0.012,
        "PKR": 3.34,
        "GBP": 0.0097,
        "EUR": 0.011,
        "INR": 1,
    },
};
//Prompt User for Input
const answer = await inquirer.prompt([
    {
        name: "from",
        message: "Please select your currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "INR"]
    },
    {
        name: "to",
        message: "Please select your currency in which you want to convert",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "INR"]
    },
    {
        name: "amount",
        message: "Please Enter your Amount in numbers",
        type: "number",
        choices: ["USD", "PKR", "GBP", "EUR", "INR"]
    }
]);
//Destructuring User Input
const { from, to, amount } = answer;
// performing currency conversion
if (from && to && amount) {
    let result = currencyConverter[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} of ${amount}${from} is ${result}${to}`);
}
else {
    console.log(`Invalid Conversion`);
}
;
