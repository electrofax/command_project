const React = require("react");
const Layout = require("./Layout");

function MainPage({ user }) {
  return (
    <Layout user={user}>
        <h1>Привет! Это корпоративный портал ООО “Высокая Гора”. Чтобы получить доступ к сайту - обратись в департамент HR.</h1>
      <div id="container">
          <div className="backgroundImg">
          <div id="inputs">
          <a href="auth" className="btn" ><button type="submit" href="/auth">Авторизоваться</button></a>
            </div>
          </div>
      </div>
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
}

module.exports = MainPage;
