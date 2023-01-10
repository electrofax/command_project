const React = require("react");
const Layout = require("./Layout");

function Form({ user }) {
  return (
    <Layout user={user}>
      <div>
        <div>
          <p>
            Привет, Имя Фамилия! И добро пожаловать в команду Высокогорья!
            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет- Имя Фамилия Мы подготовили для тебя
            чек-лист на первый день. Процесс выполнения будет сохраняться,
            поэтому ты можешь закрывать пункты в удобном для тебя порядке.
          </p>
        </div>
        <h5>Нужно подготовить твое рабочее место:</h5>
        <form method="" action="">
          <ul>
            <li>
              <p>
                <input type="checkbox" name="pass_key" value="1680" onChange />
                Наставник выдал мне пропуск
              </p>
            </li>
            <li>
              <p>
                <input type="checkbox" name="wifi" value="1680" onChange />
                Наставник сообщил пароль от Wi-Fi
              </p>
            </li>
            <li>
              <p>
                <input type="checkbox" name="laptop" value="1680" onChange />
                Системный администратор выдал мне ноутбук
              </p>
            </li>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="email_pass"
                  value="1680"
                  onChange
                />
                Системный администратор выдал мне доступы к почте
              </p>
            </li>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="stationery"
                  value="1680"
                  onChange
                />
                Ты отправил(-а) офис-менеджеру на почту список необходимой для
                тебя канцелярии
              </p>
            </li>
          </ul>
        </form>
        <h5>Важно познакомиться с коллегами: :</h5>
        <form method="" action="">
          <ul>
            <li>
              <p>
                <input type="checkbox" name="meet_head" value="1680" onChange />
                Ты познакомился (-ась) со своим руководителем
              </p>
            </li>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="chattochat"
                  value="1680"
                  onChange
                />
                Ты написал(-а) сообщение в командный чат
              </p>
            </li>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="three_names_check"
                  value="1680"
                  onChange
                />
                Напиши имена трех твоих коллег по отделу:
                <input name="three_names"></input>
              </p>
            </li>
          </ul>
        </form>
        <h5>Важно пройти оформление в отделе кадров: :</h5>
        <form method="" action="">
          <ul>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="skans_of_docks"
                  value="1680"
                  onChange
                />
                Ты отправил (-а) сканы документы на оформление в отдел кадров
              </p>
            </li>
            <li>
              <p>
                <input
                  type="checkbox"
                  name="com_secret"
                  value="1680"
                  onChange
                />
                Ты подписал (-а) соглашение о коммерческой тайне
              </p>
            </li>
          </ul>
        </form>
        <h5>А теперь самое время работать: :</h5>
        <form method="" action="">
          <ul>
            <li>
              <p>
                <input type="checkbox" name="#" value="1680" onChange />
                Получи свою первую задачу у руководителя
              </p>
            </li>
            <li>
              <p>
                <input type="checkbox" name="#" value="1680" onChange />
                Создай подпись в почте по корпоративному шаблону
              </p>
            </li>
          </ul>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
