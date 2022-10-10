let numberOne = prompt('Qual o primeiro valor?');
let numberTwo = prompt('Qual o segundo valor?');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);  

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const division = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert('A soma é: ' + sum);
alert('A subtração é: ' + sub);
alert('A multiplicação é: ' + multi);
alert('A divisão é: ' + division);
alert('O resto da divisão é: ' + rest);

if(sum % 2 === 0){
  alert(`O número ${sum},  é PAR`)
}else if(sum % 2 === 1) {
  alert(`O número ${sum}, é IMPAR`)
} 

if(numberOne === numberTwo) {
  alert('Os números inseridos são iguais!')
}else if(numberOne !== numberTwo) {
  alert('Os números inseridos são diferentes!')
}