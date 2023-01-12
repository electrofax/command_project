import { fetchData, fetchDataGet, el, checkInput } from './helper.js';

let url = window.location.origin + '/api/' + window.location.href.match(/form\/(.*)/g).at(-1)

//отправить феч на получение данных
const resp = await fetchDataGet(url)

//заполнить форму
for (let key in resp) {
    //проставить галочки, если они должны быть проставлены
    if(resp[key] === true) {
        el('input[name="' + key + '"]').checked = true
    }
    //заполнить инпут
    if(key === 'three_names') {
        el('input[name="' + key + '"]').value = resp[key]
    }
}

//сохранять каждое изменение формы - по клику на элемент получаем его и записываем значение в базу фечом
el('#user-form').addEventListener('click', async (target) => {

    const { name } = event.target

    //изменение чекбоксов
    if (checkInput(target.path) && name !== 'three_names') {
        let status = el('input[name="' + name + '"]').checked
        let payload = {};
        payload [ name ] = status
        //отправить феч на запись изменений
        await fetchData(url, payload, 'PUT');
    }

    //изменение инпута с именами менторов
    if (name === 'three_names') {
        //сохранить value инпута после того как с него уберут фокус
        el('input[name="three_names"]').onblur = async () => { 
        let value = el('input[name="three_names"]').value
        let payload = {};
        payload [ name ] = value;
        //отправить феч
        await fetchData(url, payload, 'PUT');
        }
    }

})
