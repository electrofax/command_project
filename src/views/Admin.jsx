const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin({ user }) {
  return (
    <Layout user={user}>
      <h1>AdminsPage {user}</h1>
      <div id="container">
          <div className="backgroundImg">
          <form id="form" action="/admin" method="POST">
          <div id="inputs">
              <input name="employee_name" placeholder="полное имя нового сотрудника" type="text" />
              <input name="mentor_name" placeholder="имя ментора" type="text" />
              <button type="submit">Добавить</button>
            </div>
            </form>
          </div>
      </div>
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
};
