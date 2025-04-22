import express from 'express'
const router = express.Router()

const sendUserInfo = router.post('/user', (req, res) => {
  const body = req.body
  res.send({
    status: 0,
    message: '请求发送成功',
    data: body
  })
})

export default {
  sendUserInfo
}