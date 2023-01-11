const React = require("react");
const Layout = require("./Layout");

function Forms({ user, fetchForm, one }) {
  return (
    <Layout user={user} fetchForm={fetchForm}>

      {one ? (
      <div classNameName="formPage">
        <div>
          <p>
            Привет, {one.employee_name}! И добро пожаловать в команду Высокогорья!

            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет- {one.mentor_name}. Мы подготовили для тебя
            чек-лист на первый день. Процесс выполнения будет сохраняться,
            поэтому ты можешь закрывать пункты в удобном для тебя порядке.
          </p>
        </div>
        <form method="" id="user-form">
          <h5>Нужно подготовить твое рабочее место:</h5>

          <div>
            <form method="" id="user-form" action="/api/form">
              <h4 className="titleCheckBox">
                Нужно подготовить твое рабочее место:
              </h4>
              <div>
                <div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="pass_key" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Наставник выдал мне пропуск
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="wifi" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Наставник сообщил пароль от Wi-Fi{" "}
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="laptop" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Системный администратор выдал мне ноутбук{" "}
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="email_pass" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Системный администратор выдал мне доступы к почте
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="stationery" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Ты отправил(-а) офис-менеджеру на почту список
                        необходимой для тебя канцелярии
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <h4 className="titleCheckBox">
                Важно познакомиться с коллегами:
              </h4>
              <div>
                <div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="meet_head" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Ты познакомился (-ась) со своим руководителем
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="chattochat" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Ты написал(-а) сообщение в командный чат
                      </p>
                    </label>
                  </div>

                  <p>&nbsp;Ты написал(-а) сообщение в командный чат</p>
                </label>
              </li>
              <li>
                <label className="checkString">
                  <div className="mylabel">
                    <input name="three_names_check" type="checkbox" id="coding" />
                    <div className="slidinggroove">
                      <span className="ontext">Yes</span>
                      <span className="offtext">No</span>
                    </div>

                  </div>
                </div>
              </div>
              <h4 className="titleCheckBox">
                Важно пройти оформление в отделе кадров:
              </h4>
              <div method="" action="">
                <div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input
                          name="skans_of_docks"
                          type="checkbox"
                          id="coding"
                        />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Ты отправил (-а) сканы документы на оформление в
                        отдел кадров
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="com_secret" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Ты подписал (-а) соглашение о коммерческой тайне
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <h4 className="titleCheckBox">А теперь самое время работать:</h4>
              <div method="" action="">
                <div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="first_task" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Получи свою первую задачу у руководителя
                      </p>
                    </label>
                  </div>
                  <div>
                    <label className="checkString">
                      <div className="mylabel">
                        <input name="email_sign" type="checkbox" id="coding" />
                        <div className="slidinggroove"></div>
                      </div>
                      <p className="strCheckForm">
                        &nbsp;Создай подпись в почте по корпоративному шаблону
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      )  : ( 
        <h1>Вас не существует</h1>
      )}
    </Layout>
  );
}

module.exports = Forms;
