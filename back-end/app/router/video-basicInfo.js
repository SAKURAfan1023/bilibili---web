import express from 'express'

const router = express.Router()

export const getBasicInfo = router.get('/video/list', (req, res) => {
  const db = req.app.locals.db
  const getStr = 'select * from video'
  let message = '请求成功,获得视频列表'
  db.query(getStr, (err, result) => {
    if (err) return console.log(err.message);
    const data = result
    return res.send({
      status: 0,
      message,
      data
    })
  })
})