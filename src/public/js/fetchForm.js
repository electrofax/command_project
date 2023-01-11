import { fetchData, fetchDataGet, el, checkInput } from './helper.js';

let url = '/api/form'
const resp = await fetchDataGet(url + '/1')

for (let key in resp) {
    if(resp[key] === true) {
        el('input[name="' + key + '"]').checked = true
    }
    if(key === 'three_names') {
        el('input[name="' + key + '"]').value = resp[key]
    }
}

el('#user-form').addEventListener('click', async (target) => {
    const { name } = event.target

    if (checkInput(target.path) && name !== 'three_names') {
        let status = el('input[name="' + name + '"]').checked
        let payload = {};
        payload [ name ] = status
        await fetchData(url, payload, 'PUT');
    }

    if (name === 'three_names') {
        el('input[name="three_names"]').onblur = async () => { 
        let value = el('input[name="three_names"]').value
        let payload = {};
        payload [ name ] = value;
        await fetchData(url, payload, 'PUT');
        }
    }

})
