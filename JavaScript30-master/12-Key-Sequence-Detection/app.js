let secretCode = prompt('Secret Code is :')
const regex = new RegExp(secretCode, 'ig')
window.addEventListener('keyup', checkSecretCode);
const strArray = [];
function checkSecretCode(e) {
    strArray.push(e.key)
    if (strArray.join('').match(regex)) {
        strArray.splice(0)
        return alert('DING DING'), cornify_add(), setTimeout(() => {
            window.location.reload()
        }, 2000);

    }
}