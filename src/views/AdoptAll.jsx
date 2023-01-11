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
      <div id="mappedList">
        {all.map((list) => (
          <div key={list.id} id="name">
          {list.employee_name}
          </div>
        ))}
      </div>
      <div id="some">
        {some.map((el) => (
          <div key={el.id}>
            {el.id},
            {'  '}
            { ((isBool(el).filter((one) => one[1] === true).length/12) * 100).toFixed(0)}
          {console.log(isBool(el))} %
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