const React = require("react");
const Layout = require("./LayoutHome");

function Auth ( {user}) {
  return (
    <Layout user={user}>
      <link rel="stylesheet" href="/css/index.css" />

      <div className="content_block">

      <div className="form_cont">
        <form action="/auth" method="post" className="loginForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
            <input name="login" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          {/* <button type="submit" className="btn btn-primary">Войти</button> */}
          <div className="btn">
          <button type="submit" className="button">Войти</button>
          </div>
        </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Auth;
