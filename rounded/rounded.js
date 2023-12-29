const minChiziq = document.querySelector('#minChiziq')

let b = 0
setInterval(() => {
    b += 6
    minChiziq.style.transform = `rotate(${b}deg)`
    console.log(b);   
}, 1000);

// 360 