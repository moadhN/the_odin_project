const keys = document.querySelectorAll('.key')

window.addEventListener('keydown', playSound);
keys.forEach(element => { element.addEventListener('transitionend', removePlaying) });

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}


function removePlaying(element) {
    if (element.propertyName === "transform") {
        this.classList.remove('playing')
    }
}

