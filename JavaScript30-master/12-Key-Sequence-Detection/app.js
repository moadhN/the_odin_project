let secretCode = prompt('Secret Code is :')
const regex = new RegExp(secretCode, 'ig')
window.addEventListener('keyup', checkSecretCode);
const strArray = [];
function checkSecretCode(e) {
    strArray.push(e.key)
    if (strArray.join('').match(regex)) {
        return alert('DING DING'), window.location.reload()

    }
}