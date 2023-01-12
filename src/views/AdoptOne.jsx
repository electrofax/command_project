const React = require('react');
const Layout = require('./Layout');

function AdoptAll(props) {
  const { findOneUser, some } = props;
  const isBool = function(arr) {
    return Object.entries(arr).map(([key, value]) => [key, (value)=== true])
  };
  const procent = Object.values(isBool);
  const mapped = procent.filter((el) =>  el === true)
  const sum = mapped.length
  console.log(some)
  console.log('-------')
  return (
    <Layout>
      <h1>Мои листки адаптации</h1>
      <div id="adoptContainer">
      <div id="mappedList" style={{'width': 
    '40%' }}>
        {findOneUser.map((list) => (

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={list.id} id="name">
          {list.employee_name}
          <div id="checkProgress">
            <a href={`/form/${list.link}`}>
          <button type="click">Проверить</button>
          </a>
        </div>
        </div>
        ))}
      </div>
      {/* <div id="checkProgress">
        <button type="click">Проверить</button>
      </div> */}
      <div id="some">
        {some.map((el) => (
          <div key={el.id}>
            {el.id}-
            {' - '}
            { ((isBool(el).filter((one) => one[1] === true).length/12) * 100).toFixed(0)} %
          {console.log(isBool(el))} 
            {/* {some.length} */}
          </div>
        ))}
     </div>

      </div>
      {/* <link defer rel="stylesheet" href="/css/index.css" /> */}
    </Layout>
  );
}

module.exports = AdoptAll;