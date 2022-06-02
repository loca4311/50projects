const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const inctement = target / 1000

    if (c < target) {
      counter.innerText = `${Math.ceil(c + inctement)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})