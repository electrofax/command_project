import { fetchData, fetchDataGet, el, checkInput } from './helper.js';

//заполнить форму данными (если они есть)
let url = '/api/form'
//отправить феч на получение данных
const resp = await fetchDataGet(url + '/1')


for (let key in resp) {
    if(resp[key] === true) {
        el('input[name="' + key + '"]').checked = true
    }
    if(key === 'three_names') {
        el('input[name="' + key + '"]').value = resp[key]
    }
}

//сохранять каждое изменение формы
el('#user-form').addEventListener('click', async (target) => {
    const { name } = event.target

    //изменение чекбоксов
    if (checkInput(target.path) && name !== 'three_names') {
        let status = el('input[name="' + name + '"]').checked
        let payload = {};
        payload [ name ] = status
        //отправить феч
        await fetchData(url, payload, 'PUT');
    }

    //изменение инпута с именами менторов
    if (name === 'three_names') {
        //сохранить value инпута после того как с него уберут форкус
        el('input[name="three_names"]').onblur = async () => { 
        let value = el('input[name="three_names"]').value
        let payload = {};
        payload [ name ] = value;
        //отправить феч
        await fetchData(url, payload, 'PUT');
        }
    }

})
