// Currency converter in Typescript:
// 30.April.2024 :
// step 1 currency conversion rates:
import inquirer from "inquirer";
// IN PKR:
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1
    },
    // IN GBP:
    "GBP": {
        "USD": 1.25,
        "PKR": 349.22,
        "GBP": 1
    },
    // IN Dollars(USD):
    "USD": {
        "GBP": 0.80,
        "PKR": 278.42,
        "USD": 1
    },
};
// step 2: Using inquirer:
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency..?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency"
    },
    // conversion amount:
    {
        type: "number",
        name: "amount",
        message: "Enter your conversionn amount"
    },
]);
// Step 3: Output:
const { from, to, amount } = answer;
// check input in given programs:
if (from && to && amount) {
    // formula:
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    //generate error:
    console.log("Invalid inputs");
}
;
