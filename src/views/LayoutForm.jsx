const React = require('react');

function LayoutForm(props) {
  const { children, user, fetchForm } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/csss/index.css" />
        <link rel="stylesheet" href="/css/hroni.css" />
        <script type="module" src="/js/application.js" />
        {fetchForm && <script type="module" src="/js/helper.js" />}
        {fetchForm && <script type="module" src="/js/fetchForm.js" />}
        <title>Form</title>
      </head>

      {user ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h4 className="navbar-brand" href="#">
              <img className="logo_img" src="/img/logo.png" alt="Логотип" />
            </h4>
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
        <div />
      )}

      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

module.exports = LayoutForm;
