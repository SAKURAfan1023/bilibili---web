import { openTheLoginPage } from "../pc-common/pc-loginPage.js";
const contributes = document.querySelectorAll('.pc-index-header-upload')

contributes.forEach((item) => {
  item.addEventListener('click', openTheLoginPage)
})

export function changeTheContribute() {
  console.log('已经切换contribute');

  contributes.forEach(item => { item.removeEventListener('click', openTheLoginPage) })

  document.querySelectorAll('.contribute-change').forEach((item) => {
    item.href = '../pc-contribute/index.html'
  })
}