const React = require("react");
const Layout = require("./Layout");

function Reset(props) {
  const { user, one } = props;
  return (
  <Layout user={user}>
    <h1>Восстановление пароля</h1>
    <h2>Page</h2>
    <hr />
    <h1>{one.name}</h1>
  </Layout>
    )
}

module.exports = Reset;