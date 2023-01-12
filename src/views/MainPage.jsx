const React = require("react");
const Layout = require("./Layout");

function MainPage({ user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      {user ? (
        <div className="content_block">
          <div className="text_main">
            Это корпоративный портал ООО “Высокая Гора”.
          </div>
        </div>
      ) : (
        <div className="content_block">
          <div className="text_main">
          <h1>ПРИВЕТ!</h1>
          <h2>
            Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.
          </h2>
          </div>
          <div className="btn_auth">
            <a href="auth" className="btn"><button className="button">Авторизоваться</button></a>
          </div>
        </div>
      )}
    </Layout>
  );
}

module.exports = MainPage;
