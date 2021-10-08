const second = document.querySelector('.second-hand');
const minute = document.querySelector('.min-hand')
const hour = document.querySelector('.hour-hand')

function setDate() {
    const date = new Date()
    const secondDate = date.getSeconds();
    const minuteDate = date.getMinutes();
    const hourDate = date.getHours();
    const secondDeg = ((secondDate / 60)) * 360
    const minuteDeg = ((minuteDate / 60)) * 360
    const hourDeg = ((hourDate / 12)) * 360


    second.style = `transform :rotate(${secondDeg}deg)`
    minute.style = `transform :rotate(${minuteDeg}deg)`
    hour.style = `transform :rotate(${hourDeg}deg)`

}
setInterval(setDate, 1000);




