const upd = document.querySelector('#upd');
const first = document.querySelector('#first')
const sec = document.querySelector('#sec')
const btn = document.querySelector('.btn')
const insert = document.querySelector('#insert');
const partOne = document.querySelector('#partOne');
const partTwo = document.querySelector('#partTwo');
const admin = document.querySelector('#adm');
const sel = document.querySelector('select');
const usr = document.querySelector('#usr');


btn.addEventListener('click', async (e) => {
  const id = e.target.dataset.userid;
  console.log('iddd', id)
  e.preventDefault();
  console.log('hrs');
  console.log(first.value)
  console.log(sec.value)

  const dataz = {first, id}
  if(first.value === sec.value){
    console.log('зашло в иф с паролем')
  const response = await fetch(`/reset/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: first.value,
      id: id,
       
  }),
      });
      const data = await response.json();
      console.log('data', data)
      if(data.updated){
        partOne.innerText = 'Пароль';
        partTwo.innerText= 'Изменен';
        first.value ='';
        sec.value= '';
      }
    }
    
  });

  sel.addEventListener('change', async (e) => {
    console.log('ADMIn',sel.value)
    const id = e.target.dataset.selectid;
    const response = await fetch(`/reset/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isAdmin: sel.value,
        id: id,
      }),
    });
    const data = await response.json();
  })
