let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = upperCase.toLowerCase();
let numbers = "1234567890";
let symbols = '`~!@#$%^&*()-=_+?/{}[]";:<>|';

let combined = upperCase.concat(lowerCase,numbers,symbols)

let button = document.getElementById("button");
let passwordLength = 15;

let input = document.getElementById('input')

button.addEventListener('click',random)

function random() {
  let password = ''
  for (i = 0; i < passwordLength; i++) {
    let random = combined[Math.floor(Math.random() * combined.length)];
    password+=random
    console.log(password);
  }
  input.value=password
}

let copyButton = document.querySelector('.copy')
copyButton.addEventListener('click', copy)

function copy() {
  input.select()
  document.execCommand('copy')
}
