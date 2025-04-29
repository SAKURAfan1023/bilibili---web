import { openTheLoginPage } from "../pc-common/pc-loginPage.js";
const contributes = document.querySelectorAll('.pc-index-header-upload')

changeTheContributeBack()

//登录后投稿按钮绑定
export function changeTheContribute() {
  console.log('已经切换contribute');
  //移除最初设置的点击事件弹出登录框
  contributes.forEach(item => { item.removeEventListener('click', openTheLoginPage) })
  //将链接地址连接投稿页面
  document.querySelectorAll('.contribute-change').forEach((item) => {
    item.href = '../pc-contribute/index.html'
  })
}

//登录前初始投稿按钮绑定
export function changeTheContributeBack() {
  console.log('已经切换contribute');
  //绑定登陆窗口
  contributes.forEach((item) => {
    item.addEventListener('click', openTheLoginPage)
  })
  //将连接地址设置为空
  document.querySelectorAll('.contribute-change').forEach((item) => {
    item.href = '#'
  })
}