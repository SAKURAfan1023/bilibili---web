import { loginRender } from "./pc-loginRender.js"
import { showCard2 } from './pc-loginPop.js';
import { showCard } from './pc-loginPop.js';
import { changeTheContributeBack } from "../index/pc-index-openTheLoginPage.js";

const triggers = document.querySelectorAll('.pc-index-header-imgBorder')

//设置退出后，渲染初始画面
export function logout() {
  document.querySelector('.pc-loginCard-logout').addEventListener('click', () => {
    //改变头像个人信息面板初始化
    //移除原始事件监听
    triggers.forEach(item => item.removeEventListener('mouseenter', showCard2))
    //设置初始事件监听
    triggers.forEach(item => item.addEventListener('mouseenter', showCard))
    //移除本地存储token
    localStorage.removeItem('token')
    document.querySelectorAll('.pc-loginCard').forEach(item => { item.classList.remove('pc-loginCard-info') })
    document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.innerHTML = `<span>登录</span>` })
    //渲染登录页面
    loginRender()
    //改变投稿按钮事件监听
    changeTheContributeBack()
  })
}