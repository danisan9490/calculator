const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firsValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  if (awaitingNextValue) return;

  // if no decimal
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);

  if (!firsValue) {
    firsValue = currentValue;
  } else {

  }

  awaitingNextValue = true;
  operatorValue = operator;

}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset display
function resetAll() {
  calculatorDisplay.textContent = '0';
  firsValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
}

// Event listener
clearBtn.addEventListener('click', resetAll)