const React = require('react');
const Layout = require('./Layout');

function AdoptAll(props) {
  const { all, some } = props;
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
      <h1>AdoptList</h1>
      <div id="adoptContainer">
      <div id="mappedList" style={{'width': 
    '40%' }}>
        {all.map((list) => (

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
      <link defer rel="stylesheet" href="/css/index.css" />
    </Layout>
  );
};

module.exports = AdoptAll;


// {posts.map((post) => (
//   <div
//     id="formPosts"
//     className="card text-bg-secondary mb-3"
//     style={{ width: '18rem' }}
//     key={post.id}
//   >
//     <div className="card-header">
//       {post.id}
//       .
//       {' '}
//       {post.User.name}
//     </div>
//     <div className="card-body">
//       <h5 className="card-title">{post.title}</h5>
//       <p className="card-text">{post.body}</p>
//       <div id="functional">
//         <button id="edit" type="button" data-editid={post.id}>edit</button>
//         <button id="delete" type="button" data-deleteid={post.id}>delete</button>
//       </div>
//     </div>
//   </div>
// ))}
