"use strict";

var prompt = require("prompt-sync")();

function getValidNumberInput(promptMessage) {
  let number = -1;
  while (true) {
    let input = prompt(promptMessage);
    number = Number(input);
    if (!isNaN(number)) {
      break;
    } else {
      console.log("Please insert only valid number!");
    }
  }

  return Number(number);
}

function getValidOperatorInput(promptMessage) {
  let action = "";
  while (true) {
    action = prompt(promptMessage);
    if (
      action === "+" ||
      action === "-" ||
      action === "*" ||
      action === "/" ||
      action === "%" ||
      action === "**"
    ) {
      break;
    } else {
      console.log("Please insert only valid operator!");
    }
  }

  return action;
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

const divZeroErr = "Error: Division by zero!";
function divide(a, b) {
  if (b === 0) {
    return divZeroErr;
  }

  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

while (true) {
  let result;
  let n1 = getValidNumberInput("Insert first number: ");
  let n2 = getValidNumberInput("Insert second number: ");
  let op = getValidOperatorInput("Insert arithmetic operator: ");

  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = substract(n1, n2);
      break;
    case "*":
      result = multiply(n1, n2);
      break;
    case "/":
      result = divide(n1, n2);
      break;
    case "%":
      result = modulo(n1, n2);
      break;
    case "**":
      result = power(n1, n2);
      break;
  }

  // ERROR CHECK
  if (result === divZeroErr) {
    console.log(divZeroErr);
    return;
  }

  // NULL CHECK
  let nullCheck = result ?? "";
  if (nullCheck === "") {
    console.log("Result is undefined or null, something went wrong");
    return;
  }

  // TYPE ANALYSYS
  let negPosZero = "";
  let oddEven = "";
  let integerFloat = "";

  if (result < 0) {
    negPosZero = "negative";
  } else if (result === 0) {
    negPosZero = "Zero";
  } else {
    negPosZero = "positive";
  }

  if (Number.isInteger(result)) {
    integerFloat = "integer";
  } else {
    integerFloat = "floating-point";
  }

  oddEven = result % 2 === 0 ? "Even" : "Odd";

  console.log(
    `Result is ${result}: ${negPosZero}${integerFloat === "integer" ? " and " + oddEven : ""} and ${integerFloat} number`,
  );

  // Exit prompt
  let exitResp = prompt(
    "Do you want to perform another calculation? (yes / no): ",
  );

  if (exitResp.toLowerCase() === "no") {
    break;
  }
}

