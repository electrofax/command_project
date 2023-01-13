const React = require("react");
const Layout = require("./Layout");

function Register({ user }) {
  return (
    <Layout user={user}>
      <div className="content_block">
        <div className='content_center'>
          <link rel="stylesheet" href="/css/index.css" />
          <div id="container_adopt">
            <div className="reg_form">
              <form action="/register" method="post" className="registerForm" id="form">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Логин
                  </label>
                  <input
                    name="login"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1">Email адрес</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Пароль
                  </label>
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Имя Фамилия
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input type="radio" name="isAdmin" value="true" />Администратор
                </div>
                <div className="mb-3 form-check">
                  <input type="radio" onChange name="isAdmin" value="false" checked />Пользователь
                </div>
                <button type="submit" className="button">
                  Зарегистрировать
                </button>
              </form>
            </div>
          </div>          </div>
      </div>
    </Layout>
  );
}

module.exports = Register;