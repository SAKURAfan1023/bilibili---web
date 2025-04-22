import express from 'express'
const router = express.Router()

const sendUserInfo = router.post('/user/signup', (req, res) => {
  const db = req.app.locals.db
  const postStr = 'insert into user set ?'
  const body = req.body
  res.send({
    status: 0,
    message: '请求发送成功',
    data: body
  })
})

const getUserInfo = router.post('/user/signin', (req, res) => {
  const db = req.app.locals.db
  const body = req.body
  res.send({
    status: 0,
    message: '请求发送成功',
    data: body
  })
})

export default {
  sendUserInfo,
  getUserInfo
}