const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', activeCalss))
panels.forEach(panel => panel.addEventListener('transitionend', activeTxtCalss))

function activeCalss() {
    this.classList.toggle("active")
}
function activeTxtCalss(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active_txt')
    }

}