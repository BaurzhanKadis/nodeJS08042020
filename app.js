const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json({ extended: true }));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));


const PORT = config.get('port')

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },console.log("Связь с базой данных есть"))
    
    app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
  } catch (e) {
    console.log('Server message errror', e.message)
    process.exit(1)
  } 
}

start()
