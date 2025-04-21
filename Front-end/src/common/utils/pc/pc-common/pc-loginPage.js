const closeButton = document.querySelector('.close-pc-login')

function hideTheLoginPage() {
  document.querySelector('.pc-loginMask').style.display = 'none'
}

function openTheLoginPage() {
  document.querySelector('.pc-loginMask').style.display = 'block'
}

closeButton.addEventListener('click', hideTheLoginPage)
document.querySelector('.pc-index-header-imgBorder').addEventListener('click', openTheLoginPage)
document.querySelector('.pc-loginCard-content4-button').addEventListener('click', openTheLoginPage)
document.querySelector('.pc-loginCard-content3').addEventListener('click', openTheLoginPage)
