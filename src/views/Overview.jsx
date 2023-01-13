const React = require("react");
const Layout = require("./Layout");

function Overview(props) {
  const { user, hrUsers } = props;
  return (
    <Layout user={user}>
      
<h1>Overview</h1>
<h2>Page</h2>
<hr />
{user ? (
        <><dev
        >
          <a
            //  className="nav-link active" aria-current="page"
            href="/register"><button type="submit"
            >Добавить Пользователей</button></a>
        </dev><hr /><dev
        >
            
          </dev><div id="userList">
          
            <h2>Наши сотрудники</h2>

            {hrUsers.map((hr) => (
              <div
                id="formPosts"
                className="card text-bg-secondary mb-3"
                style={{ width: '18rem', display: 'flex', justifyContent: 'center' }}
               
                key={hr.id}
              >
                <div className="card-header">
                  Имя: {hr.name}

                  {' '}
                  Почта: {hr.email}
                </div>
                {/* <div className="card-body">
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