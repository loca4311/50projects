const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSLideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSLideIndex++
    if (activeSLideIndex > slidesLength - 1) {
      activeSLideIndex = 0
    }
  } else if (direction === 'down') {
    activeSLideIndex--
    if (activeSLideIndex < 0) {
      activeSLideIndex = slidesLength - 1
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSLideIndex * slideHeight
  }px)`
  slideLeft.style.transform = `translateY(${activeSLideIndex * slideHeight}px)`
}
