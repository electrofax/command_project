const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin({ user }) {
  return (
<<<<<<< HEAD:src/views/Admin.jsx
    <Layout user={user}>
          <div className="content_block">

      <h1>AdminsPage {user}</h1>
=======
    <Layout>
      <h1>AdminsPage</h1>
      {/* <div id="wall"> */}
>>>>>>> 0592ba7cf70876caaedd2b3d454685191e88ac8f:src/views/Adopt.jsx
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
<<<<<<< HEAD:src/views/Admin.jsx
=======
      {/* </div> */}
      { children }
>>>>>>> 0592ba7cf70876caaedd2b3d454685191e88ac8f:src/views/Adopt.jsx
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
};
