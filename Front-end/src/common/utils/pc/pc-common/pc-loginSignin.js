import { hideTheLoginPage } from "./pc-loginPage.js"
import { autoLog } from "./pc-loginAuto.js"
import { changeTheContribute } from "../index/pc-index-openTheLoginPage.js"
import { alertMsg } from "./pc-alert.js"
const signup = document.querySelector('.pc-login-right-inputButton-left')
const signin = document.querySelector('.pc-login-right-inputButton-right')
const form1 = document.querySelector('.pc-login-form-password')


if (localStorage.getItem('token')) {
  //设置axios拦截器，在axios发送之前为其添加token请求头
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`; // 动态注入 token
    }
    return config;
  });
}

//登录页面，在注册页面点击登录按钮触发事件
signin.addEventListener('click', (e) => {
  e.preventDefault()
  //serialize获取表单数据打包为对象
  const data = serialize(form1, { hash: true, empty: true })
  console.log(1);
  //axios向服务器发送POST请求来验证
  axios({
    url: 'http://127.0.0.1/api/user/signin',
    method: 'POST',
    data
  }).then((result) => {
    if (result.data.status === 0) {
      //如果请求成功，且状态正常（status===）则在localstorage添加token
      localStorage.setItem('token', JSON.stringify(result.data.token))
      let time = 3
      console.log(result.data);
      document.querySelector('.pc-login').style.display = 'none'
      let div = document.createElement('div')
      document.querySelector('.pc-loginMask').appendChild(div)
      div.classList.add('pc-login')
      // 出现跳转提示“登陆成功”
      div.innerHTML = `<div class="pc-loginAlert"><span>登陆成功!</span></div>`
      setTimeout(() => {
        // 定时器执行登陆成功后的后续操作
        //1.重置表单
        form1.reset()
        //2.隐藏注册页面
        hideTheLoginPage()
        //3.调用自动登录函数
        autoLog()
        //4.移除登陆成功提示还原注册页面
        div.remove()
        document.querySelector('.pc-login').style.display = 'flex'
        //5.将投稿按钮设置为跳转页面
        changeTheContribute()
      }, 1000);
    }
  }).catch((err) => {
    console.log(err.message);
  })
})

//注册，在注册页面点击注册按钮
signup.addEventListener('click', (e) => {
  e.preventDefault()
  //serialize获取表单信息并作为data发送
  const data = serialize(form1, { hash: true, empty: true })
  axios({
    url: 'http://127.0.0.1/api/user/signup',
    method: 'POST',
    data
  }).then((result) => {
    // 返回相应结果
    console.log(result.data);
  })
})
