const React = require("react");
const Layout = require("./Layout");

function Home({ user }) {
  return (
    // * 15 прокинь пропс дальше и иди в Layout
    <Layout user={user}>
      <link rel="stylesheet" href="/css/index.css" />

      {user ? (
        <>
          <script defer src="js/homePost.js" />
          <>
            <div className="container_blok">   
            </div>
            <div className="form_cont">
              <form action="/" method="post" className="formcreatePost">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Тема поста
                  </label>
                  <input
                    name="url"
                    type="url"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    по идее url API
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Тема поста
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    Коротко о чем хотите рассказать
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Текст Поста
                  </label>
                  <input
                    name="body"
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Отправить
                </button>
              </form>
            </div>
          </>
        </>
      ) : (
        <div>
          пожалуйста зарегистрируйтесь
        </div>
      )}
    </Layout>
  );
}

module.exports = Home;
