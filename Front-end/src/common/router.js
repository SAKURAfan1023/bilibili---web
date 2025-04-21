import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
  res.send('获取user列表成功');
});

router.post('/user/password', (req, res) => {
  res.send('发送passwords成功');
});


export default router;