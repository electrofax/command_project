const upd = document.querySelector('#upd');
const first = document.querySelector('#first')
const sec = document.querySelector('#sec')
const btn = document.querySelector('.btn')


btn.addEventListener('click', async (e) => {
  const id = e.target.dataset.userid;
  console.log('iddd', id)
  e.preventDefault();
  console.log('hrs');
  console.log(first.value)
  console.log(sec.value)
  
  const data = {first, id}
  if(first === sec){
  const response = await fetch(`/reset/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
      });
      const dataz = await response.json();
    }
  });
