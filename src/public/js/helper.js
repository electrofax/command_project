const el = (loc) => document.querySelector(loc);

async function fetchData(url = '', data = {}, method) {
  const response = await fetch(url, {
    method: method, 
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

async function fetchDataGet(url = '') {
  const response = await fetch(url);
  return response.json();
}

function checkInput (arr) {
    for(let key of arr) {
        if (key.tagName === 'INPUT') {
            return true
        }
    }
    return false
}

export { fetchData, fetchDataGet, el, checkInput};
