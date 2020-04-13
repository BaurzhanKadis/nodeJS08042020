const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const router = Router();


// /api/auth/registration
router.post(
  '/registration',
  [
    check('email', 'Некорректный Email').isEmail(),
    check('password', 'Минимальная длинна пороля 6 символов').isLength({min:6})
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
    const {email, password} = req.body;
    const condidate = await User.findOne({ email });
    if (condidate) {
      return res.status(400).json({message: "Такой пользователь уже существует!"})
    }
    const hashedPassowrd = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassowrd
    });
    await user.save();
    res.status(201).json({ message: "Пользователь создан"})
  } catch (e) {
    res.status(500).json({ message: "Что0то пошло не так....."})
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
      res.json({token, userId: user.id})
    } catch (e) {
      res.status(500).json({ message: "Что0то пошло не так....."})
    }
});
module.exports = router;