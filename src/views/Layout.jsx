const React = require('react');

function Layout ( { children, user } ) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Document</title>
      </head> 
      

      {user ? (
      <><nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item pull-right">
                  <a className="nav-link active " aria-current="page" >{user}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/test">Test</a>
                </li>
              </ul>
            </div>
          </div>
        </nav><body>
            {children}
          </body></>
      ): ( 

      <><nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/register">Registrations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/test">TEST str</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <body>
              {children}
            </body></>
      )}
    </html>
  );
};

module.exports = Layout;