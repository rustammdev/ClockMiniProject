let date = new Date()
let hour = date.getHours()
let min = date.getMinutes()
let sek = date.getSeconds()


let hourInterval = hour
let minInterval  = min
let sekInterval  = sek

// 1. Ayni vaqtdagi vaqtni olib, uni live o'zgartirish [ complate ]
// 2. hour, min, sek 59 dan keyin 00 ga o'zgarish      [ complate ]
// 3. 59 dan keyin hour, min, sek, +1 ga o'shishi      [ complate ]
// 4. 0 - 1 -> 01, 02   [ complate ]

function prependZero(number) {
    if (number <= 9)
        return "0" + number;
    else
        return number;
}

const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const sekEl = document.getElementById('sek')

setInterval(() => {
    if (sekInterval == 60){
        sekInterval++
        minInterval++
        sekInterval = 1
    }else{ sekInterval += 1 }

    if (minInterval == 60) {
        if (hourInterval == 23 && minInterval == 60){
            hourInterval++
        }
        hourInterval++
        minInterval = 0
    }

    sekInterval--

    hourEl.textContent = prependZero(hourInterval)
    minEl.textContent  = prependZero(minInterval)
    sekEl.textContent  = prependZero(sekInterval++)
    
}, 1000)



// clearInterval(window)



