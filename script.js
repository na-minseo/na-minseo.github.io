// 계산기의 초기 값 설정
let result = 0;
let currentInput = '0';
let operator = '';

// 화면에 표시되는 숫자를 업데이트하는 함수
function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentInput;
}

// 숫자 버튼 클릭 시 호출되는 함수
function inputNumber(num) {
  if (currentInput === '0') {
    currentInput = num.toString();
  } else {
    currentInput += num.toString();
  }
  updateDisplay();
}

// 연산자 버튼 클릭 시 호출되는 함수
function inputOperator(op) {
  operator = op;
  result = parseInt(currentInput);
  currentInput = '0';
}

// 등호 버튼 클릭 시 호출되는 함수
function calculate() {
  const display = document.getElementById('display');
  let num = parseInt(currentInput);

  switch (operator) {
    case '+':
      result += num;
      break;
    case '-':
      result -= num;
      break;
    case '*':
      result *= num;
      break;
    case '/':
      result /= num;
      break;
  }

  currentInput = result.toString();
  operator = '';
  updateDisplay();
}

// 초기화 버튼 클릭 시 호출되는 함수
function clear() {
  result = 0;
  currentInput = '0';
  operator = '';
  updateDisplay();
}

// 숫자 버튼에 이벤트 리스너 등록
const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function() {
    inputNumber(parseInt(this.innerText));
  });
}

// 연산자 버튼에 이벤트 리스너 등록
const operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function() {
    inputOperator(this.innerText);
  });
}

// 등호 버튼에 이벤트 리스너 등록
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', calculate);

// 초기화 버튼에 이벤트 리스너 등록
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);
