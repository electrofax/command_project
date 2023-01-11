const React = require("react");
const Layout = require("./Layout");

function Register() {
  return (
    <Layout>
      {/* <script defer src="js/homePost.js" /> */}
      <link rel="stylesheet" href="/css/index.css" />
      <div className="form_cont">
        <form action="/register" method="post" className="registerForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Login
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Имя Фамилия
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
            />
          </div>
          
          <div className="mb-3 form-check">
          <input type="radio"  name="isAdmin" value="true"/>Admin
          </div>
          <div className="mb-3 form-check">
          <input type="radio" onChange name="isAdmin" value="false" checked/>User
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрировать
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Register;
