// GLOBAL SCOPE
let currentResults = 0;
//   CREATING AN ARRAY
let logResults = [];
// creating objects in js
// let resultObj = {}
// const userFirstInput =100;
// userFirstInput =120;
// let operator ='+'
// let userSecondInput =220;
// LOCAL SCOPE
// function addnumber(num1, num2){
//     const results = num1 + num2;
//     return results

// }
// alert (results);
// addnumber(1, 3);

// DISPLAYS CALCULATION DESCRIPTION
function getDescription( temporal, operator) {
    return `${temporal} ${operator} ${getUserInput()}`;
  }

function calculate(type){
    let temporal = currentResults;
        if
        (
      type != 'ADD' &&
     type != 'SUBTRACT' &&
      type != 'MULTIPLY' &&
      type != 'DIVIDE' 
    ){
        
    return;
    }
      let operator;
        
        if (type=="ADD"){
            currentResults += getUserInput();
            operator = "+";
        }
        else if (type=="SUBTRACT"){
        currentResults -= getUserInput();
        operator ="-";
    }
    else if (type=="DIVIDE"){
        currentResults *= getUserInput();
        operator = "*";
    }
    else if (type=="MULTIPLY"){
        currentResults /= getUserInput();
        operator = "/";
    }
        else{
          console.log('please enter a valid calculation')
        }
        const calcDescription = getDescription(temporal, operator);
    writelog(currentResults, calcDescription);
    outputResult(currentResults, calcDescription);
    }

// DISPLAYS USER INPUT
function getUserInput() {
  return parseInt(userInput.value);
}

function writelog(currentResults, calcDescription) {
  let resultsObj = {
    results: currentResults,
    description: calcDescription,
  };
  logResults.push(resultsObj);
  console.log(logResults);
}


// ADDS USER INPUT VALUES
function add() {
    calculate("ADD");
}
addBtn.addEventListener("click", add);
// alert (results);
// add(1, 3);
// SUBTRACTS USER INPUT VALUES
function subtract() {
    calculate("SUBTRACT");
//   const calcDescription = getDescription("-");
//   currentResults -= getUserInput();
//   writelog(currentResults, calcDescription);
//   outputResult(currentResults, calcDescription);
}
 subtractBtn.addEventListener("click", subtract);
// DIVIDES USER INPUT VALUES
function divide() {
    calculate("DIVIDE");
//   const calcDescription = getDescription("/");
//   currentResults /= getUserInput();
//   writelog(currentResults, calcDescription);
//   outputResult(currentResults, calcDescription);
}
 divideBtn.addEventListener("click", divide);
// MULTIPLIES USER INPUT VALUES
function multiply() {
    calculate("MULTIPLY");
//   const calcDescription = getDescription("*");
//   currentResults = currentResults * getUserInput();
//   writelog(currentResults, calcDescription);
//   outputResult(currentResults, calcDescription);
}
 multiplyBtn.addEventListener("click", multiply);
