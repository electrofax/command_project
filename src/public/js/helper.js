const getEl = (loc) => document.querySelector(loc);

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
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function fetchDataGet(url = '') {
  const response = await fetch(url);
  return response.json();
}

export { fetchData, fetchDataGet, getEl };
