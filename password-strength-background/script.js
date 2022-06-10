const backgroung = document.getElementById('background')
const password = document.getElementById('password')

// password.addEventListener('input', (e) => {
//   const passwordLength = e.target.value.length

//   if (passwordLength <= 20) {
//     backgroundBlur(passwordLength)
//   } else if (passwordLength > 20) {
//     backgroundBlur(20)
//   }
// })

// function backgroundBlur(passwordLength) {
//   backgroung.style.filter = `blur(${20 - passwordLength}px)`
// }

password.addEventListener('input', (e) => {
  const passwordLength = e.target.value.length
  const blurValue = 20 - passwordLength * 2
  backgroung.style.filter = `blur(${blurValue}px)`
})
