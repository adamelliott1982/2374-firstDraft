const background = document.querySelector('.background')
const loading = document.querySelector('.loading')

let percent = 0

function blurring() {
    percent ++
    if(percent > 99) {
        clearInterval(int)
    }
    loading.innerHTML = `${percent}%` 
    loading.style.opacity = map(percent, 0, 100, 1, 0)
    background.style.filter = `blur(${map(percent, 0, 100, 30, 0)}px)`
}

let int = setInterval(blurring, 30)


const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
