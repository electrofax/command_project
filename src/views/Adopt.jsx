const React = require('react');
const Layout = require('./Layout');

module.exports = function Adopt({ user }) {
  return (
    <Layout user={user}>
      <div className="content_block">
        <div className='content_center'>
          <h1>Добрый день, {user}</h1>
          <h2>Вы можете добавить нового сотрудника</h2>
          <div id="container_adopt">
              <form id="form" action="/adopt" method="POST">
                {/* <div id="inputs">
              <input name="employee_name" placeholder="полное имя нового сотрудника" type="text" />
              <input name="mentor_name" placeholder="имя ментора" type="text" />
              <button id="btn" type="submit">Добавить</button>
            </div> */}

                <div className="mb-3">
                  <input name="employee_name" placeholder="полное имя нового сотрудника" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <input name="mentor_name" placeholder="имя ментора" type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* <button type="submit" className="btn btn-primary">Войти</button> */}
                <div className="btn">
                  <button id="btn" type="submit" className="button">Добавить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </Layout>
  );
};
