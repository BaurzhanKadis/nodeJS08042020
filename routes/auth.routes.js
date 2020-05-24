const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const router = Router();


// /api/auth/register
router.post('/register',
  [
    check('email', 'Некорректный Email').isEmail(),
    check('password', 'Минимальная длинна пороля 6 символов').isLength({min:6}),
    check('nickname').isString()
  ],
  async (req,res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при регистрации"
      })
    }
    const {email, password, nickname} = req.body;
    const condidate = await User.findOne({ email });
    if (condidate) {
      return res.status(400).json({message: "Такой пользователь уже существует!"})
    }
    const hashedPassowrd = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassowrd,
      nickname
    });
    await user.save();
    res.status(201).json({ message: "Пользователь создан"})
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что-то пошло не так.....регистрации"})
  }
});
// /api/auth/login
router.post('/login',
  [
    check('email', 'Введите корректный Email').normalizeEmail().isEmail(),
    check('password', 'Введите пороль').exists()
  ],
  async (req,res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе в сиситему"
        })
      }
      const {email, password} = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" })
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Не верный пороль, попробуйте снова" })
      }
      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )
      res.json({token, userId: user.id, nickname: user.nickname})
    } catch (e) {
      res.status(500).json({ message: "Что0то пошло не так....."})
    }
});
// router.post('/primary', async (req, res) => {
//   try {
//     const user = await User.findOne({ email });
//     res.json({nickname: user.nickname})
//     // console.log("nickname", nickname)
//   } catch (e) {
//     res.status(500).json({ message: "Что0то пошло не так....."})
//   }
// })
module.exports = router;