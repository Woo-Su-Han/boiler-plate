const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/key');
const { User } = require("./models/User");

const app = express();
const port = 3000;

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB 연결 설정
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~hi');
});

// GET 요청을 처리하는 /register 라우트
app.get('/register', (req, res) => {
  res.send('This is the registration page');
});

// POST 요청을 처리하는 /register 라우트
app.post('/register', async (req, res) => {
  try {
    // 클라이언트에서 받은 정보를 바탕으로 User 인스턴스 생성
    const user = new User(req.body);

    // 데이터베이스에 사용자 정보 저장
    await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err); // 에러 로그 출력
    return res.status(500).json({ success: false, error: err });
  }
});

// 서버 포트 설정
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
