const React = require("react");
const LayoutHome = require("./LayoutHome");

function MainPage({ user }) {
  return (
    <LayoutHome user={user}>
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
    </LayoutHome>
  );
}

module.exports = MainPage;
