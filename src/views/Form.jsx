const React = require("react");
const Layout = require("./Layout");

function Form({ user, fetchForm }) {
  return (
    <Layout user={user} fetchForm={fetchForm}>
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
        <form method="" id='user-form' action="/api/form">
          <h5>Нужно подготовить твое рабочее место:</h5>
          <div>
            <ul>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="pass_key"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Наставник выдал мне пропуск
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input type="checkbox" name="wifi" class="real-checkbox" />
                    <span class="custom-checkbox"></span>
                    &nbsp;Наставник сообщил пароль от Wi-Fi
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="laptop"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Системный администратор выдал мне ноутбук
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="email_pass"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Системный администратор выдал мне доступы к почте
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="stationery"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Ты отправил(-а) офис-менеджеру на почту список
                    необходимой для тебя канцелярии
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h5>Важно познакомиться с коллегами: :</h5>
          <div method="" action="">
            <ul>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="meet_head"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Ты познакомился (-ась) со своим руководителем
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="chattochat"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Ты написал(-а) сообщение в командный чат
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="stationery"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Напиши имена трех твоих коллег по отделу:&nbsp;
                    <input name="three_names"></input>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h5>Важно пройти оформление в отделе кадров: :</h5>
          <div method="" action="">
            <ul>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="skans_of_docks"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Ты отправил (-а) сканы документы на оформление в отдел
                    кадров
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="com_secret"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Ты подписал (-а) соглашение о коммерческой тайне
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <h5>А теперь самое время работать: :</h5>
          <div method="" action="">
            <ul>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="first_task"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Получи свою первую задачу у руководителя
                  </label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="email_sign"
                      class="real-checkbox"
                    />
                    <span class="custom-checkbox"></span>
                    &nbsp;Создай подпись в почте по корпоративному шаблону
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Form;
