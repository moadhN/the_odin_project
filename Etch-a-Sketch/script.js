const body = document.querySelector('body'),
    divs = document.getElementsByTagName('div'),
    divContainer = document.createElement('div'),
    button = document.createElement('button');


let n = prompt('Number of Grid ?')

/* number of Grid test */
if (n >= 100 || n < 0) {
    alert('Please enter positive and integer less then 100')
    n = prompt('Number of Grid ?')
}


/* Button */
body.appendChild(button)
button.innerText = "Clear"
button.className = ('button')
button.addEventListener('click', reloadPage)

function reloadPage() {
    window.location.reload();
}


/* Creat Divs */
function creatDivs() {
    let i = 0
    for (let i = 0; i < n * n; i++) {
        divContainer.innerHTML += '<div></div>'
    }
}
creatDivs()

divContainer.className = 'container'
body.appendChild(divContainer)
divContainer.childNodes.forEach(div => div.addEventListener('mouseover', changeColor))


/* divs style */


let colors = 255;
let bolean = true
function changeColor(element) {
    bolean ? colors = colors - 25.5 : colors = colors + 25.5

    element.target.style.backgroundColor = `rgb(${colors},${colors},${colors})`;

    if (colors < 0) {
        bolean = !bolean
    } else if (colors > 255) {
        bolean = !bolean
    }

}


/* container Grid Style */
const container = document.querySelector('.container');
let width = n * 20,
    height = n * 20;
container.style.width = width + "px"
container.style.height = height + "px"


