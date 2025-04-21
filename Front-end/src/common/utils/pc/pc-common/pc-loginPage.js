const closeButton = document.querySelector('.close-pc-login')
const closeEye = document.querySelector('.pc-login-right-inputTop-closeEye')
const openEye = document.querySelector('.pc-login-right-inputTop-openEye')
const password = document.querySelector('.pc-login-right-inputTop-password')
const userName = document.querySelector('.pc-login-right-inputTop-userName')
const login = document.querySelector('.pc-login-right-inputButton-right')
const form = document.querySelector('.pc-login-form-password')

function hideTheLoginPage() {
  requestAnimationFrame(() => { document.querySelector('.pc-loginMask').style.display = 'none' })
}

function openTheLoginPage() {
  document.querySelector('.pc-loginMask').style.display = 'block'
}

function passwordChange() {
  password.addEventListener('input', () => {
    password.type = 'password'
  })

  closeEye.addEventListener('click', () => {
    password.type = 'text'
    closeEye.style.display = 'none'
    openEye.style.display = 'inline-block'
  })

  openEye.addEventListener('click', () => {
    password.type = 'password'
    closeEye.style.display = 'inline-block'
    openEye.style.display = 'none'
  })
}


login.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(serialize(form, { hash: true, empty: true }));
})





passwordChange()
document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content4-button').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content3').forEach(item => { item.addEventListener('click', openTheLoginPage) })
closeButton.addEventListener('click', hideTheLoginPage)