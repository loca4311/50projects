const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeAllActive()
    btn.parentNode.classList.toggle('active')
  })
})

function removeAllActive() {
  toggles.forEach((btn) => {
    btn.parentNode.classList.remove('active')
  })
}
