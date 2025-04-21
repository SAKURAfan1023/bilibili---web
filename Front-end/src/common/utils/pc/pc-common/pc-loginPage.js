const closeButton = document.querySelector('.close-pc-login')

function hideTheLoginPage() {
  requestAnimationFrame(() => { document.querySelector('.pc-loginMask').style.display = 'none' })
}

function openTheLoginPage() {
  document.querySelector('.pc-loginMask').style.display = 'block'
}


document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content4-button').forEach(item => { item.addEventListener('click', openTheLoginPage) })
document.querySelectorAll('.pc-loginCard-content3').forEach(item => { item.addEventListener('click', openTheLoginPage) })
closeButton.addEventListener('click', hideTheLoginPage)