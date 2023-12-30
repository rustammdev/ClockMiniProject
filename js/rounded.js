const sekArrow = document.getElementById('sekArrow');
const minArrow = document.getElementById('minArrow');
const hourArrow = document.getElementById('hourArrow');

function updateClockHands() {
    let now = new Date();
    let nowSek = now.getSeconds();
    let nowMin = now.getMinutes();
    let nowHour = now.getHours();

    if (nowHour > 12) {
        nowHour -= 12;
    }

    const sekContent = document.querySelector('#sekContent')
    const minContent = document.querySelector('#minContent')
    minContent.textContent = nowMin
    sekContent.textContent = nowSek

    // Calculate rotation angles
    let sekDeg = nowSek * 6 - 90;
    let minDeg = nowMin * 6 - 90;
    let hourDeg = nowHour * 30 - 90;

    sekArrow.style.transform = `rotate(${sekDeg}deg)`;
    minArrow.style.transform = `rotate(${minDeg}deg)`;
    hourArrow.style.transform = `rotate(${hourDeg}deg)`;
}

// Xar sekundda strelka gradusi o'zgaradi
setInterval(updateClockHands, 1000);

// Saxifa yangilanganda funksia chaqiriladi
updateClockHands();
