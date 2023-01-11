const React = require("react");
const Layout = require("./Layout");

function Form({ user, fetchForm }) {
  return (
    <Layout user={user} fetchForm={fetchForm}>
      <div className="formPage">
        <div>
          <h3 className="titleForm">
            Привет, Имя Фамилия! И добро пожаловать в команду Высокогорья!
            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет- Имя Фамилия Мы подготовили для тебя
            чек-лист на первый день. Процесс выполнения будет сохраняться,
            поэтому ты можешь закрывать пункты в удобном для тебя порядке.
          </h3>
        </div>
        <div>
          <form method="" id="user-form" action="/api/form">
            <h4>Нужно подготовить твое рабочее место:</h4>
            <div>
              <ul>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="pass_key" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Наставник выдал мне пропуск
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="wifi" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Наставник сообщил пароль от Wi-Fi{" "}
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="laptop" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Системный администратор выдал мне ноутбук{" "}
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="email_pass" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Системный администратор выдал мне доступы к почте
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="stationery" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Ты отправил(-а) офис-менеджеру на почту список
                      необходимой для тебя канцелярии
                    </p>
                  </label>
                </li>
              </ul>
            </div>
            <h4>Важно познакомиться с коллегами:</h4>
            <div>
              <ul>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="meet_head" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Ты познакомился (-ась) со своим руководителем
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="chattochat" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Ты написал(-а) сообщение в командный чат
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="stationery" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Напиши имена трех твоих коллег по отделу:
                      <input
                        className="three_names_input"
                        name="three_names"
                      ></input>
                    </p>
                  </label>
                </li>
              </ul>
            </div>
            <h4>Важно пройти оформление в отделе кадров:</h4>
            <div method="" action="">
              <ul>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input
                        name="skans_of_docks"
                        type="checkbox"
                        id="coding"
                      />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Ты отправил (-а) сканы документы на оформление в
                      отдел кадров
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="com_secret" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Ты подписал (-а) соглашение о коммерческой тайне
                    </p>
                  </label>
                </li>
              </ul>
            </div>
            <h4>А теперь самое время работать:</h4>
            <div method="" action="">
              <ul>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="first_task" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Получи свою первую задачу у руководителя
                    </p>
                  </label>
                </li>
                <li>
                  <label className="checkString">
                    <div className="mylabel">
                      <input name="email_sign" type="checkbox" id="coding" />
                      <div className="slidinggroove">
                        <span className="ontext">Yes</span>
                        <span className="offtext">No</span>
                      </div>
                    </div>
                    <p className="strCheckForm">
                      &nbsp;Создай подпись в почте по корпоративному шаблону
                    </p>
                  </label>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Form;
