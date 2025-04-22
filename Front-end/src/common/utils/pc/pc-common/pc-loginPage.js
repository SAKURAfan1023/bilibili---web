const closeButton = document.querySelector('.close-pc-login')
const closeEye = document.querySelector('.pc-login-right-inputTop-closeEye')
const openEye = document.querySelector('.pc-login-right-inputTop-openEye')
const passwords = document.querySelectorAll('.pc-login-right-inputTop-password')
const userName = document.querySelector('.pc-login-right-inputTop-userName')
const login = document.querySelector('.pc-login-right-inputButton-right')
const form1 = document.querySelector('.pc-login-form-password')
const form2 = document.querySelector('.pc-login-form-phone')
const tabPassword = document.querySelector('.pc-login-right-tab-password')
const tabCode = document.querySelector('.pc-login-right-tab-code')
const page = document.querySelector('.pc-login')
import img1 from '../../../../assets/images/logo/22_close.9382a5a8.png'
import img2 from '../../../../assets/images/logo/33_close.a8c18fc8.png'
import img3 from '../../../../assets/images/logo/22_open.4ea5f239.png'
import img4 from '../../../../assets/images/logo/33_open.f7d7f655.png'


function hideTheLoginPage() {
  requestAnimationFrame(() => { document.querySelector('.pc-loginMask').style.display = 'none' })
}

function openTheLoginPage() {
  document.querySelector('.pc-loginMask').style.display = 'block'
}

function changeTheWay() {
  tabPassword.addEventListener('click', () => {
    if (tabCode.classList.contains('active')) tabCode.classList.remove('active')
    tabPassword.classList.add('active')
    form1.style.display = 'block'
    form2.style.display = 'none'
  })
  tabCode.addEventListener('click', () => {
    if (tabPassword.classList.contains('active')) tabPassword.classList.remove('active')
    tabCode.classList.add('active')
    form1.style.display = 'none'
    form2.style.display = 'block'
  })
}

function passwordChange() {
  passwords[0].addEventListener('input', () => {
    passwords[0].type = 'password'
  })

  closeEye.addEventListener('click', () => {
    passwords[0].type = 'text'
    closeEye.style.display = 'none'
    openEye.style.display = 'inline-block'
  })

  openEye.addEventListener('click', () => {
    passwords[0].type = 'password'
    closeEye.style.display = 'inline-block'
    openEye.style.display = 'none'
  })
}

function changeTheBackground() {
  passwords.forEach(item => {
    item.addEventListener('focus', () => {
      page.style.backgroundImage = `url(${img1}),url(${img2})`
    })
  })



  passwords.forEach(item => {
    item.addEventListener('blur', () => {
      page.style.backgroundImage = `url(${img3}),url(${img4})`
    })
  }
  )
}


login.addEventListener('click', (e) => {
  e.preventDefault()
  const data = serialize(form1, { hash: true, empty: true })
  axios({
    url: 'http://127.0.0.1/api/user/signin',
    method: 'POST',
    data
  }).then((result) => {
    console.log(result);

  })
})




changeTheWay()
passwordChange()
changeTheBackground()
document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content4-button').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content3').forEach(item => { item.addEventListener('click', openTheLoginPage) })
closeButton.addEventListener('click', hideTheLoginPage)