const imgs = document.querySelectorAll('#imgs img')
const imageContainer = document.querySelector('.image-container')
const left = document.getElementById('left')
const right = document.getElementById('right')

let currentImage = 0
let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = imgs.length - 1
  }

  imageContainer.style.transform = `translateX(${-500 * idx}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

right.addEventListener('click', () => {
  idx++
  resetInterval()
  changeImage()
})

left.addEventListener('click', () => {
  idx--
  resetInterval()
  changeImage()
})
