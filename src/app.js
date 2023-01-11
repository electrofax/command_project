// Подключаем babel для работы с jsx
require('dotenv').config();
const path = require('path')
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

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
// const path = require('path')
app.use(express.static(('public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ) Конфиг для куки в виде файла сессий
const sessionConfig = {
  name: 'ProgectCookie',
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

const adoptRoute = require('./routes/adopt.routes');
const formRoute = require('./routes/form.routes');
const updateForm = require('./routes/api/form.routes');
const getForm = require('./routes/api/form.routes');
const authRouter = require('./routes/auth.routes');
const mainPageRouter = require('./routes/mainPage.routes')
const registerRouter = require('./routes/register.routes')

app.use('/', mainPageRouter )
app.use('/form',checkUser, formRoute);
app.use('/auth', checkLogin, authRouter)
app.use('/register',checkUser, registerRouter)

// route for page for User and Admin
app.use('/adopt', adoptRoute);
app.use('/api/form', updateForm);

//api routes
app.use('/api/form', updateForm);
app.use('/api/form', getForm);

// * пишем выход
app.get('/logout', checkUser, (req, res) => { 
  //  убил сессию
  req.session.destroy(() => {
    res.clearCookie('ProgectCookie');
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

