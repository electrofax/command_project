const React = require("react");
const Layout = require("./Layout");

function Overview(props) {
  const { user, hrUsers } = props;
  return (
    <Layout user={user}>
{user ? (
        <><dev style={{
          position: 'fixed',
          top: '200px',
          width: '30px',
          marginTop: '0',
          background: 'none',
          padding: '10px' }}>
          {/* <hr /> */}
          <a 
            //  className="nav-link active" aria-current="page"
            href="/register"><button className="btn btn-primary" type="submit"
            >Добавить Пользователей</button></a>
        </dev><hr /><dev
        >
            
          </dev><div id="userList">
          
            <h2>Наши сотрудники</h2>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {hrUsers.map((hr) => (
              <div key={hr.id} className="card text-center" style={{width: '50%', display: 'flex', alignItems: 'center', margin: '2px', backgroundColor: '#dfe0e5'}}>
              <div className="card-header">
                Должность: {hr.isAdmin ? ('Администратор'): ('Сотрудник')}
              </div>
              <div className="card-body">
                <h5 className="card-title">Имя: {hr.name}</h5>
                <p className="card-text">Логин: {hr.login}</p>
                <a href={`/reset/${hr.id}`} className="btn btn-success">Посмотреть данные</a>
              </div>
              <div className="card-footer text-muted">
                Последнее изменение: {hr.updatedAt.toString().slice(4,15)}
              </div>
            </div>
            ))}
            </div>
          </div></>
      ) : (
        <h1>У вас нет прав</h1>
    )}

    </Layout>
  )
}

module.exports = Overview;