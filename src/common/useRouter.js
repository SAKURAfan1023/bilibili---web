import express from 'express'
const app = express()
import router from './router.js'

app.use(router)

app.listen(80, () => {
  console.log('使用成功http://127.0.0.1:80');

})