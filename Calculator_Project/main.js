const operate = (a, b, oper) => { return Function('a', 'b', `return a ${oper} b`)(a, b) }


const input = document.querySelector('.input')
const numbers = document.querySelectorAll('.number')
const clearButton = document.querySelector('.clear')
const operators = document.querySelectorAll('.operator')
const offOn = document.querySelector('.off-on')
const equal = document.querySelector('.equal')
const del = document.querySelector('.delate')
const array = []

let clearBoolean;
let offBoolean = false;
let sreenOn = false;
let buttonOn = false;
let operatorBoolean = false;
let operatorOpern = true;
let equalbutton = false;
let stopWriting = true;
let writingCount = 0;



let a = undefined, b = undefined, oper = undefined;

/* off-on */
offOn.addEventListener('click', openCloseScreen)

function openCloseScreen() {


    if (offBoolean) {
        window.location.reload()
    } else {
        input.textContent = '0'
        offBoolean = true
        sreenOn = true
    }

}

/* input number */

numbers.forEach(number => number.addEventListener('click', numberInput))

function numberInput() {
    operators.forEach(item => item.style.background = '')//clear operator style
    if (stopWriting) {
        if (operatorBoolean) {
            input.textContent = ''
            operatorBoolean = false

        }
        if (clearBoolean || sreenOn) {
            input.textContent = ''
            clearBoolean = false
            sreenOn = false

        }
        if (offBoolean) {
            input.textContent += this.getAttribute('data-button')
            buttonOn = true
        }
        if (equalbutton) {
            input.textContent = this.getAttribute('data-button')
            clearBoolean = true;
            operatorOpern = true;
            equalbutton = false;

        }


        writingCount++
        if (writingCount === 10) {
            stopWriting = false
        }

    }

}



/* operator input */

operators.forEach(item => item.addEventListener('click', addOperator))

function addOperator() {

    if (offBoolean & buttonOn & operatorOpern) {
        operators.forEach(item => item.style.background = '')//clean operator style 

        array.push(this.getAttribute('data-operator'))
        this.style.background = "#4F1A1E"

        array.push(input.textContent)
        operatorBoolean = true
        operatorOpern = false
        console.log(array)
        stopWriting = true
        writingCount = 0
    }
    return array
}


/* delete Number */

del.addEventListener('click', delateNumber)

function delateNumber() {
    console.log(this)
    let text = input.textContent
    let inputArray = text.split('')
    inputArray.pop()
    text = inputArray.join('')
    input.textContent = text
    stopWriting = true
    writingCount--
}



/* clear screen */


clearButton.addEventListener('click', clearScreen)

function clearScreen() {
    operators.forEach(item => item.style.background = '')//clear operator style
    if (offBoolean) {
        input.textContent = '0'

        a = undefined, b = undefined;
        clearBoolean = true;
        operatorOpern = true;
        stopWriting = true
        writingCount = 0
    }

}


/* result  */

equal.addEventListener('click', printResult)

function printResult(a, oper) {
    a = Number(addOperator()[1])
    console.log(a)
    b = Number(input.textContent);
    oper = addOperator()[0]
    console.log(oper)
    input.textContent = operate(a, b, oper)
    equalbutton = true
    array.pop()
    array.pop()
    stopWriting = true
}

