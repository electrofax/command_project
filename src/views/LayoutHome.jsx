const React = require('react');

function LayoutHome(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type='module' src='/js/application.js' />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link rel='stylesheet' href='/css/reset.css' />
        <link rel='stylesheet' href='/css/index.css' />
        <title>Main</title>
      </head>
      <body>
      <nav className="navbar navbar-expand-lg nav-color">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="logo">
              <img src="/img/logo.png" className="img-fluid" alt="..."></img>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='#'>
                    ООО "Высокая гора"
                    </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='/adopt'>
                    Создать пользователя
                    </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
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

module.exports = LayoutHome;
