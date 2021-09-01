const daysEl = document.querySelector("#dias")
const hoursEl = document.querySelector("#horas")
const minutesEl = document.querySelector("#minutos")
const secondsEl = document.querySelector("#segundos")

const newYear = "1 jan 2022"

function countdown() {
const newYearDate = new Date(newYear)
const currentDate = new Date()
console.log (newYearDate)
const base = Math.floor((newYearDate - currentDate) / 1000)
console.log (base)
const second = Math.floor(base%60)
console.log (second)
const minute = Math.floor ((base/60)%60)
const hour = Math.floor ((base/3600)%24)
const day = Math.floor (base/3600/24)

secondsEl.innerHTML=formatTime(second)
hoursEl.innerHTML=formatTime(hour)
minutesEl.innerHTML=formatTime(minute)
daysEl.innerHTML=day
}

function formatTime(timer) {
    return timer <10?`0${timer}`:timer
}
countdown()
setInterval(countdown,1000)