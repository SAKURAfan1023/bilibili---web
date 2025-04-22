import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

import user from '../router/login.js'

const db = mysql.createPool({           //建立连接关系
  host: '127.0.0.1',   //数据库的IP地址
  user: 'root', //登录数据库的账户
  password: '5563999hlf',  //账号的密码
  database: 'bilibili-db' //要操纵的数据库名称
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api', user.sendUserInfo)




app.listen(80, () => {
  console.log('服务器运行在http://127.0.0.1');

})