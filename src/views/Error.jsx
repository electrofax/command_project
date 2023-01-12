const React = require("react");
const Layout = require("./Layout");

function Error({ message, user }) {
  return (
    <Layout user={user}>
      <div className="content_block">
        <div className='content_center'>
        <h1>{message}</h1>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Error;