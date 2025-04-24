import { hideTheLoginPage } from "./pc-loginPage.js"
import { autoLog } from "./pc-loginAuto.js"
const signup = document.querySelector('.pc-login-right-inputButton-left')
const signin = document.querySelector('.pc-login-right-inputButton-right')
const form1 = document.querySelector('.pc-login-form-password')

if (localStorage.getItem('token')) {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`; // 动态注入 token
    }
    return config;
  });
}

//登录
signin.addEventListener('click', (e) => {

  e.preventDefault()
  const data = serialize(form1, { hash: true, empty: true })
  axios({
    url: 'http://127.0.0.1/api/user/signin',
    method: 'POST',
    data
  }).then((result) => {
    if (result.data.status === 0) {
      localStorage.setItem('token', JSON.stringify(result.data.token))
      let time = 3
      console.log(result.data);
      document.querySelector('.pc-login').style.display = 'none'
      let div = document.createElement('div')
      document.querySelector('.pc-loginMask').appendChild(div)
      div.classList.add('pc-login')
      div.innerHTML = `<div class="pc-loginAlert"><span>登陆成功!</span></div>`
      setTimeout(() => {
        form1.reset()
        hideTheLoginPage()
        autoLog()
        div.remove()
        document.querySelector('.pc-login').style.display = 'flex'
      }, 1000);
    }
  }).catch((err) => {
    console.log(err.message);
  })
})

//注册
signup.addEventListener('click', (e) => {
  e.preventDefault()
  const data = serialize(form1, { hash: true, empty: true })
  axios({
    url: 'http://127.0.0.1/api/user/signup',
    method: 'POST',
    data
  }).then((result) => {
    console.log(result.data);
  })
})
