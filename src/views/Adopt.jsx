const React = require('react');
const Layout = require('./Layout');

module.exports = function Adopt({ user }) {
  return (
    <Layout user={user}>
          <div className="content_block">

      <h1>AdminsPage {user}</h1>
      <div id="container">
          <div className="backgroundImg">
          <form id="form" action="/admin" method="POST">
          <div id="inputs">
              <input name="employee_name" placeholder="полное имя нового сотрудника" type="text" />
              <input name="mentor_name" placeholder="имя ментора" type="text" />
              <button id="btn" type="submit">Добавить</button>
            </div>
            </form>
          </div>
      </div>
      </div>
      {/* </div> */}
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
};
