const input = document.querySelector('#input-number');
const hintContainer = document.querySelector('.hint-container');
const tentativi = document.querySelector('.tentativi');
const hint = document.querySelector('.hint');
const answers = document.querySelector('.answers');
const btnVerifica = document.querySelector('#btn-verifica');
const btnReset = document.querySelector('#btn-reset');
let randomNumber;
let numeroTentativi = 0;  

function generateRandomNumber(){
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber)
}
generateRandomNumber();

function appendHint(tempValue){
  tentativi.innerHTML = `tentativo numero ${numeroTentativi}`;
  if(tempValue == randomNumber){
    hintContainer.style.backgroundColor = '#d9ead3';
    hintContainer.style.color = '#207a00';
    hintContainer.style.height = 'auto';
    hint.innerHTML = 'HAI INDOVINATO!!';
    btnVerifica.disabled = true;
  } else {
    tentativi.innerHTML = `tentativo numero ${numeroTentativi}`;
    hintContainer.style.backgroundColor = '#fff3cc';
    hintContainer.style.color = '#957200';
    hintContainer.style.height = 'auto';
    hint.innerHTML = `Il tuo tentativo è troppo ${tempValue > randomNumber ? 'ALTO' : 'BASSO'}`;
  }
}

function appendAnswer(answer){
  let block = document.createElement('div');
  block.classList.add('answer-block')
  let text = document.createElement('p');
  text.textContent = `La tua risposta ${answer}`;
  block.appendChild(text);
  answers.appendChild(block);
}


export function resetGame(){
  numeroTentativi = 0;
  input.value = null;
  generateRandomNumber();
  answers.innerHTML = '';
  hint.innerHTML = '';
  tentativi.innerHTML = '';
  hintContainer.style.backgroundColor = '';
  hintContainer.style.color = '';
  hintContainer.style.height = '0';
  btnVerifica.disabled = false;
}

export function compareNumber(){
  let tempValue = input.value;
  if(tempValue){
    numeroTentativi++;
    appendAnswer(tempValue);
    appendHint(tempValue);
    input.value = null;
  }
}


btnVerifica.addEventListener('click', compareNumber);
btnReset.addEventListener('click', resetGame);