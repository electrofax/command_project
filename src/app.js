// Подключаем babel для работы с jsx
require('dotenv').config();

const express = require('express');
// Подключение библиотеки express
const morgan = require('morgan');
const { sequelize } = require('../db/models');


const session = require('express-session')
const FileStore = require('session-file-store')(session)
const { SECRET } = process.env;

// * . мидла для проверки выхода
const checkUser = require('./middlewares/common.js');
const checkLogin = require('./middlewares/checkLogin')

// Создание приложения express
const app = express();

// morgan logger middleware
// Подключение middleware, который отдаёт клиенту файлы из папки
// Подключение middleware, который парсит JSON от клиента
// Подключение middleware, который парсит BODY от HTML-формы
app.use(morgan('dev'));
// const path = require('path')
app.use(express.static(('public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ) Конфиг для куки в виде файла сессий
const sessionConfig = {
  name: 'HolodCookie',
  store: new FileStore(), // куки будут хранится тут
  secret: SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  }
}

// *  Подключи сессии как мидлу
app.use(session(sessionConfig))

// !  Мидла для логирования сессий
app.use((req, res, next) => {
  // console.log('req.session=>>>', req.session);
  next();
});

const mainPageRouter = require('./routes/mainPage.routes');
// const loginRouter = require('./routes/login.routes');

app.use('/', mainPageRouter);
// app.use('/login', checkLogin, loginRouter)

// * пишем выход
app.get('/logout', checkUser, (req, res) => { 
  //  убил сессию
  req.session.destroy(() => {
    res.clearCookie('HolodCookie');
    res.redirect('/');
  });
});


// Запуск сервера по порту 3000
const PORT = process.env.PORT || 3100; // порт из env

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('DB OK');
  } catch (error) {
    console.log(error);
  }
  console.log(`Server Запущен на http://localhost:${PORT}`); // Запуск сервера
});

