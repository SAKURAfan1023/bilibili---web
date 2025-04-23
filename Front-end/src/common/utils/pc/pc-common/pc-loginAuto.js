import img from '../../../../assets/images/user/默认头像.jpg'
import { openTheLoginPage } from './pc-loginPage.js';
import { clearAllTimeouts } from './pc-loginPop.js';
import { showCard2 } from './pc-loginPop.js';
import { hideCard2 } from './pc-loginPop.js';
import { showCard } from './pc-loginPop.js';
import { hideCard } from './pc-loginPop.js';

const triggers = document.querySelectorAll('.pc-index-header-imgBorder')
const cards = document.querySelectorAll('.pc-loginCard')
if (localStorage.getItem('token')) {
  axios({
    url: 'http://127.0.0.1/admin/user/verify',
    method: 'post'
    // headers: {
    //   'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}` // 认证头
    // }
  }).then((result) => {
    console.log(result);
    document.querySelectorAll('.pc-index-header-imgBorder').forEach(item => { item.removeEventListener('click', openTheLoginPage) })
    document.querySelector('.pc-index-header-imgBorder').innerHTML = `<img src="${img}" style="width: 100%;">`
    document.querySelector('.pc-loginCard').classList.add('pc-loginCard-info')

    triggers.forEach(item => item.removeEventListener('mouseenter', showCard))
    triggers.forEach(item => item.removeEventListener('mouseleave', hideCard))

    cards.forEach(item => item.removeEventListener('mouseenter', clearAllTimeouts))
    cards.forEach(item => item.removeEventListener('mouseleave', hideCard))

    triggers.forEach(item => item.addEventListener('mouseenter', showCard2))
    triggers.forEach(item => item.addEventListener('mouseleave', hideCard2))

    cards.forEach(item => item.addEventListener('mouseenter', clearAllTimeouts))
    cards.forEach(item => item.addEventListener('mouseleave', hideCard2))
    // document.querySelector('.pc-loginCard').innerHTML = ' '
  }).catch((err) => {
    console.log(err.message);
  })
}