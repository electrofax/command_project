const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin(props) {
  const { children } = props;
  return (
    <Layout>
      <h1>AdminPage</h1>
      <div id="container">
         <div className="backgroundImg">
          <div id="inputs">
          <form id="form" action="/admin" method="POST">
              <input name="employee_name" placeholder="полное имя нового сотрудника" type="text" />
              <input name="mentor_name" placeholder="имя ментора" type="text" />
              <button type="submit">Добавить</button>
              </form>
            </div>
         </div>
      </div>
      { children }
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
};
