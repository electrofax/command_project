const React = require("react");
const Layout = require("./Layout");

function Reset(props) {
  const { user, one } = props;
  return (
  <Layout user={user}>
    <h1>Изменить статус сотрудника</h1>
    <hr />
    <div id="list">
    <h1>{one.name}</h1>
    <select id="sel" name="user_profile_color_1">
  <option value="1">Администратор</option>
  <option value="2">Сотрудник</option>
</select>
    </div>
  <div>
    <div id="form">
      {/* <form id="upd" > */}
      <div id="half">
      <div id="forTxt">
          <h4>Здесь можно
            </h4>
            <h4>
             поменять пароль</h4>
        </div>
        <div id="input">
        <label>
          Введите новый пароль
        </label>
          <input id="first" name="password" type="text"  placeholder="пароль" />
          <label >
                    Подтвердите новый пароль
                  </label>
          <input id="sec" name="verify" type="text" placeholder="пароль" />
          <button className="btn"  data-userId={`${one.id}`} type="button">Поменять</button>
        </div>
      </div>
      {/* </form> */}
    </div>
  </div>
  <link rel='stylesheet' href='/css/resetPage.css' />
  <script  src="/js/reset.js" />
  </Layout>
    )
}

module.exports = Reset;