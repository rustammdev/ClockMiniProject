let date = new Date()
let hour = date.getHours()
let min = date.getMinutes()
let sek = date.getSeconds()

let dayIndex = date.getDay() // week number 
let dd = date.getDate()
let yr = date.getFullYear()

let mth = date.getMonth()
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekName = ['SUN', 'Mon', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']



let hourInterval = hour
let minInterval  = min
let sekInterval  = sek

/* --------------  Rounded  --------------- */
const minChiziq = document.querySelector('#sekArrow')

minChiziq.style.transform = `rotate(${sekInterval * 6}deg)`

/* ----------------------------- */

/*    day     */
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const week = document.querySelector('#week')

day.textContent = dd
month.textContent = months[mth] 
year.textContent = yr
week.textContent = weekName[dayIndex]

/*   change the regional clock    PM - 12, AM - 24*/
const regText = document.querySelector('#digit')
const regClock =  document.querySelector('#btn')

regText.textContent = 'AM'
let am_pm = 23;
let num = 2
let changed = false

regClock.addEventListener("click",() => {
    if (num % 2 == 0){
        num++, am_pm = 12
        digit.textContent = 'PM'
        hourInterval -= 12
    }else{ 
        num--, am_pm = 23, 
        digit.textContent = 'AM' 
        hourInterval += 12
    }
})


function prependZero(number) {
    if (number <= 9)
        return "0" + number;
    else
        return number;
}

const hourEl = document.getElementById('hour')
const minEl  = document.getElementById('min')
const sekEl  = document.getElementById('sek')



console.log(sekInterval);


setInterval(() => {
    minChiziq.style.transform = `rotate(${sekInterval * 6}deg)`

    if (sekInterval == 60){
        sekInterval++
        minInterval++
        sekInterval = 1
    }else{ sekInterval += 1 }

    if (minInterval == 60) {
        if (hourInterval == am_pm && minInterval == 60){
            hourInterval++
        }
        hourInterval++
        minInterval = 0
    }

    sekInterval--
    
    hourEl.textContent = prependZero(hourInterval)
    minEl.textContent  = prependZero(minInterval)
    sekInterval++
    
    const dotToggle = document.querySelector('#tog')
    dotToggle.classList.toggle('tog')

}, 1000)




// let b = 0
// setInterval(() => {
//     b += 6
//     minChiziq.style.transform = `rotate(${b}deg)`
//     console.log(b);   
// }, 1000);



const sekArr = document.getElementById('sekArr')
for(let i = 0; i < 60; i++){
    const span = document.createElement('span')
    const span2 = document.createElement('span')
    span2.textContent = '-'
    span.appendChild(span2)
    sekArr.appendChild(span)
}

{
    let sekundArrow = 0
    Array.from(sekArr.children).forEach((span) => {
        span.style.transform = `rotate(${sekundArrow}deg)`
        sekundArrow += 6
    })
}

{
    let rotateArrow = -6
    Array.from(sekArr.children).forEach((span) => {
        
    })
}