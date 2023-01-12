const React = require("react");
const LayoutHome = require("./LayoutHome");

function Error({ message, user }) {
  return (
    <LayoutHome user={user}>
      <div className="content_block">
        <div className='content_center'>
        <h1>{message}</h1>
        </div>
        <div className="btn">
        <a href='/adopt'>
          <button type="submit" className="button">Назад</button>
        </a>
          </div>
      </div>
    </LayoutHome>
  );
}

module.exports = Error;