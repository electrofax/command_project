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
  <select defaultValue={one.isAdmin} data-selectid={`${one.id}`} id="sel" name="user_profile">
  <option id="adm" value="true">Администратор</option>
    <option id="usr" value="false">Сотрудник</option>
</select>
    </div>
  <div>
    <div id="form">
      
      <div id="half">
      <div id="forTxt">
          <h4 id="partOne">Здесь можно
            </h4>
            <h4 id="partTwo">
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
        <div id="insert" />
      </div>
    </div>
  </div>
  <link rel='stylesheet' href='/css/resetPage.css' />
  <script  src="/js/reset.js" />
  </Layout>
    )
}

module.exports = Reset;