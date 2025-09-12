import lupa from './img/lupa.png'
import lupaTwo from './img/lupaTwo.png'
const input = document.createElement('input')
console.log(input);
input.classList.add('input__center__section1')
input.placeholder = 'Введіть рік народження'
input.setAttribute('type', 'text')


const img = document.createElement('img')
img.src = lupa;
img.alt = 'lupa'

const button = document.createElement('button')
button.classList.add('button__center__section1')
button.setAttribute('type', 'button')
button.appendChild(img)
console.log(button);

const form = document.querySelector('.form__center__section1')
const formEnd = document.querySelector('.form__end__section1')


form.appendChild(input)
form.appendChild(button)

const inputGuessNumber = document.createElement('input')
inputGuessNumber.classList.add('input__end__section1')
inputGuessNumber.placeholder = 'Введіть число'
inputGuessNumber.setAttribute('type', 'text')

const imgLupa = document.createElement('img')
imgLupa.src = lupaTwo;
imgLupa.alt = 'lupa'

const buttonGuessNumber = document.createElement('button')
buttonGuessNumber.classList.add('button__end__section1')
buttonGuessNumber.setAttribute('type', 'button')
buttonGuessNumber.appendChild(imgLupa)


formEnd.appendChild(inputGuessNumber)
formEnd.appendChild(buttonGuessNumber)

const inputContainer = document.querySelector('.input__container')

inputContainer.appendChild(input)
inputContainer.appendChild(button)

console.log(inputContainer);

const resultText = document.createElement('p');
resultText.classList.add('p__center__result');
form.appendChild(resultText);

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

button.addEventListener('click', () => {
    const value = input.value.trim();

    if (/^\d{4}$/.test(value)) {
        const year = parseInt(value, 10);
        if (isLeapYear(year)) {
            resultText.textContent = 'Ви народилися у високосний рік!';
            resultText.style.color = 'green';
        } else {
            resultText.textContent = 'Ви народилися не у високосний рік.';
            resultText.style.color = 'red';
        }
    } else {
        resultText.textContent = 'Будь ласка, введіть коректний 4-значний рік.';
        resultText.style.color = 'black';
    }
});