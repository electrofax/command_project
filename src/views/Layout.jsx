const React = require('react');

function Layout ( { children, user, fetchForm } ) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' href='/css/reset.css'/>
        <link rel='stylesheet' href='/css/index.css'/>
        {fetchForm && <script type='module' src='/js/helper.js'/>}
        {fetchForm && <script type='module' src='/js/fetchForm.js'/>}
        <title>Document</title>
      </head>
      {user ? (
        <><nav className="navbar navbar-expand-lg nav-color">
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
                <li className="nav-item pull-right">
                  <a className="nav-link active " aria-current="page">Приветствую,{user}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/logout">Выход</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/adopt"><button type="submit" className="button_nav out_btn">Создать Лист Адаптации</button></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/adopt/all"><button type="submit" className="button_nav">Все Листы Адаптации</button></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/adopt/one"><button type="submit" className="button_nav">Мои Листы Адаптации</button></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/overvew"><button type="submit" className="button_nav">Все Пользователи</button></a>
                </li>
              </ul>
            </div>
          </div>
        </nav><body>
            {children}
          </body></>
      ) : (
        <><nav className="navbar navbar-expand-lg nav-color">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="logo">
              <img src="/img/logo.png" className="img-fluid" alt="..."></img>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='#'>ООО Высокая гора</a>
                </li>
              </ul>
            </div>
          </div>
        </nav><body>
            {children}
          </body></>
      )}
    </html>
  );
}

module.exports = Layout;
