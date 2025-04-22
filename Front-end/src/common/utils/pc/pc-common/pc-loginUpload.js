const signup = document.querySelector('.pc-login-right-inputButton-left')
const signin = document.querySelector('.pc-login-right-inputButton-right')
const form1 = document.querySelector('.pc-login-form-password')

//登录
signin.addEventListener('click', (e) => {
  e.preventDefault()
  const data = serialize(form1, { hash: true, empty: true })
  axios({
    url: 'http://127.0.0.1/api/user/signin',
    method: 'POST',
    data
  }).then((result) => {
    console.log(result.data);
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
