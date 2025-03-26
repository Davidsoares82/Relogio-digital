let clockHours = document.querySelector("#clock-hours")
let clockMinutes = document.querySelector("#clock-minutes")
let clockSeconds = document.querySelector("#clock-seconds")
setInterval(() => {
    let now = new Date()

let realTimeHours = now.getHours().toString().padStart(2, '0')

let realTimeMinutes = now.getMinutes().toString().padStart(2, '0')

let realTimeSeconds = now.getSeconds().toString().padStart(2, '0')

clockHours.innerHTML = realTimeHours
clockMinutes.innerHTML = realTimeMinutes
clockSeconds.innerHTML = realTimeSeconds
}, 1000)