const React = require('react');
const Layout = require('./Layout');
import { copyURI } from '../public/js/helper';


function AdoptAll(props) {
  const { all, some, user } = props;
  const isBool = function(arr) {
    return Object.entries(arr).map(([key, value]) => [key, (value)=== true])
  };
  const procent = Object.values(isBool);
  const mapped = procent.filter((el) =>  el === true)
  const sum = mapped.length
  // console.log(some)
  // console.log('-------')
  return (
    <Layout user={user}>
        <link rel='stylesheet' href='/css/progressbar.css' />
      <h1>Все листки адаптации</h1>
      <div id="adoptContainer">
      <div id="mappedList" style={{'width': 
    '40%' }}>
        {all.map((list) => (

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={list.id} id="name">
          {list.employee_name}
          
          <div id="checkProgress">
            <a href={`/form/${list.link}`}>
          Проверить</a>
          <img data-link={`/form/${list.link}`} id='copyyLink' className='copyIcon' src='/img/copy.png' alt='скопировать ссылку' ></img>
        </div>
        </div>
        ))}
      </div>
      

      <div id="some">
        {some.map((el) => (
          <div key={el.id} className='interestAntPorogressBar'>
            <div className='progressBarGray'><div className='progressBar'></div></div> <div className='interests'>{ ((isBool(el).filter((one) => one[1] === true).length/12) * 100).toFixed(0)} %  </div>
          </div>
          
        ))}
      </div>

      </div>
      {/* <link defer rel="stylesheet" href="/css/index.css" /> */}
    </Layout>
  );
}

module.exports = AdoptAll;
