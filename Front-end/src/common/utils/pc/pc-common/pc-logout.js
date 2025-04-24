import { loginRender } from "./pc-loginRender.js"
import { showCard2 } from './pc-loginPop.js';
import { hideCard2 } from './pc-loginPop.js';
import { showCard } from './pc-loginPop.js';
import { hideCard } from './pc-loginPop.js'

const triggers = document.querySelectorAll('.pc-index-header-imgBorder')

export function logout() {
  document.querySelector('.pc-loginCard-logout').addEventListener('click', () => {
    triggers.forEach(item => item.removeEventListener('mouseenter', showCard2))

    triggers.forEach(item => item.addEventListener('mouseenter', showCard))
    localStorage.removeItem('token')
    document.querySelectorAll('.pc-loginCard').forEach(item => { item.classList.remove('pc-loginCard-info') })
    document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.innerHTML = `<span>登录</span>` })
    loginRender()
  })
}