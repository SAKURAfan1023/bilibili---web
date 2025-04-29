import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Joi, validateBody } from 'express-joi-validations';


const secretKey = 'HuLiFan (>w<)'//设置密钥
const router = express.Router()//设置路由
//定义表单准则
const postBody = Joi.object({
  userName: Joi.string().required().min(5).max(16).regex(/^[a-zA-Z0-9-_]+$/),
  passWord: Joi.string().required().min(5).max(16).regex(/^[a-zA-Z0-9-_]+$/)
})

//注册
const sendUserInfo = router.post('/user/signup', validateBody(postBody), (req, res) => {
  const db = req.app.locals.db
  const postStr = 'insert into user set ?'
  const body = req.body
  body.userName = String(body.userName)
  body.passWord = String(body.passWord)
  body.passWord = bcrypt.hashSync(body.passWord, 5)
  let message
  let status = 1
  db.query(postStr, body, (err, result) => {
    if (err) {
      if (/\bduplicate\b/i.test(err.message)) {
        message = '用户名重复，请重新输入'
        status = 1
      } else {
        console.log(err.message);
        message = '请求发送成功，数据库报错'
        status = 1
      }
      return res.send({
        status,
        message,
        data: body
      })
    }

    if (result.affectedRows === 1) {
      console.log('注册添加成功');
      status = 0
      return res.send({
        status,
        message: '注册成功',
        data: body
      })
    }
  })
})


//登录
const getUserInfo = router.post('/user/signin', validateBody(postBody), (req, res) => {
  const db = req.app.locals.db
  const body = req.body
  body.userName = String(body.userName)
  body.passWord = String(body.passWord)
  let status = 0
  let message
  const signinStr = 'select * from user where username = ?'
  db.query(signinStr, body.userName, (err, result) => {
    if (err) {
      status = 1
      message = '请求发送成功，数据库报错'
      console.log(err.message);
      return res.send({
        status,
        message,
        data: body
      })
    } else {
      console.log(result);
      console.log(body.passWord);

      if (result.length != 0) {
        // body.passWord = bcrypt.hashSync(body.passWord,5)
        if (bcrypt.compareSync(body.passWord, result[0].password)) {
          message = '账号检测成功，验证通过'
          status = 0
          const token = jwt.sign({ username: body.userName }, secretKey, { expiresIn: '24h' })
          return res.send({
            status,
            message,
            data: body,
            token
          })
        } else {
          status = 1
          message = '密码输入错误，请重新输入'
          res.send({
            status,
            message,
            data: body
          })
        }
      } else {
        message = '用户名或密码错误，请重新输入'
        status = 1
        return res.send({
          status,
          message,
          data: body
        })
      }
    }
  })
})

//登录验证
const verifyToken = router.post('/user/verify', (req, res) => {
  let message = '自动登录成功'
  res.send({
    status: 0,
    message,
    data: req.auth
  })
})

export default {
  sendUserInfo,
  getUserInfo,
  verifyToken
}