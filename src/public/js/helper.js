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

function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(window.location.origin + evt.target.getAttribute('data-link'))
}

export { fetchData, fetchDataGet, el, copyURI};
