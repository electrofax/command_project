const React = require("react");
const Layout = require("./Layout");

function Overview(props) {
  const { user, hrUsers } = props;
  return (
    <Layout user={user}>
<<<<<<< HEAD
<h1>Overview</h1>
<h2>Page</h2>
<hr />
<dev
//  className="nav-item"
 >
  <a
  //  className="nav-link active" aria-current="page"
    href="/register"><button type="submit"
    //  className="button_nav"
     >Добавить Пользователей</button></a>
</dev>
<hr />
<dev 
// className="nav-item"
>
  <a 
  // className="nav-link active" aria-current="page"
   href="/register">
    <button type="submit" 
    // className="button_nav"
    >Восстановление пароля</button></a>
</dev>
<div id="userList">
  <hr />
  <h2>Наши сотрудники</h2>
        {hrUsers.map((hr) => (
          <div
            id="formPosts"
            className="card text-bg-secondary mb-3"
            style={{ width: '18rem' }}
            key={hr.id}
          >
            <div className="card-header">
              Имя: {hr.name}
              
              {' '}
              Почта: {hr.email}
            </div>
            {/* <div className="card-body">
=======
      {user ? (
      <><h1>Overview</h1><h2>Page</h2><hr /><dev
        >
          <a
            //  className="nav-link active" aria-current="page"
            href="/register"><button type="submit"
            >Добавить Пользователей</button></a>
        </dev><hr /><dev
        >
            <a
              // className="nav-link active" aria-current="page"
              href="/register">
              <button type="submit"
              >Восстановление пароля</button></a>
          </dev><div id="userList">
            <hr />
            <h2>Наши сотрудники</h2>
            {hrUsers.map((hr) => (
              <div
                id="formPosts"
                className="card text-bg-secondary mb-3"
                style={{ width: '18rem' }}
                key={hr.id}
              >
                <div className="card-header">
                  {hr.name}

                  {' '}
                  {hr.email}
                </div>
                {/* <div className="card-body">
>>>>>>> 220a5411214d85642507e69863fa8ab7a7890f78
              <h5 className="card-title">{hr.id}</h5>
              <p className="card-text">{hr.login}</p>
            </div> */}
                <div id="checkProgress">
                  <a href={`/reset/${hr.id}`}>
                    <button type="click">Проверить</button>
                  </a>
                </div>
              </div>
            ))}
          </div></>
      ) : (
        <h1>У вас нет прав</h1>
    )}

    </Layout>
  )
}

module.exports = Overview;