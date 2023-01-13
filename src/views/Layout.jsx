const React = require('react');

function Layout({ children, user, fetchForm }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/csss/index.css" />
        <link rel="stylesheet" href="/css/hroni.css" />
        <script type="module" src="/js/application.js" />
        {fetchForm && <script type="module" src="/js/helper.js" />}
        {fetchForm && <script type="module" src="/js/fetchForm.js" />}
        <title>Document</title>
      </head>

      {user ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo_img" src="/img/logo.png" alt="Логотип" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
              wfd-invisible="true"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <form className="d-flex"></form>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/adopt">
                    Создать Лист Адаптации
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adopt/all">
                    Все Листы Адаптации
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adopt/one">
                    Мои Листы Адаптации
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/overview">
                    Все Пользователи
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    Выход
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo_img" src="/img/logo.png" alt="Логотип" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
              wfd-invisible="true"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <form className="d-flex"></form>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/adopt">
                    Создать Лист Адаптации
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adopt/all">
                    Все Листы Адаптации
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adopt/one">
                    Мои Листы Адаптации
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/overview">
                    Все Пользователи
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    Выход
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
