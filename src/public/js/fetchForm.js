import { fetchData, fetchDataGet, el } from './helper.js';

let url = window.location.origin + '/api/' + window.location.href.match(/form\/(.*)/g).at(-1)
const threeNamesCheckBox = el('input[name="three_names_check"]')
const threeNamesInput = el('input[name="three_names"]')

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

if (threeNamesInput.value.length === 0) {
    threeNamesCheckBox.checked = false
}

//сохранять каждое изменение формы - по клику на элемент получаем его и записываем значение в базу фечом
el('#user-form').addEventListener('click', async (event) => {

    const { name } = event.target

    //запомнить все чекбоксы кроме двух
    if (resp.hasOwnProperty(name) && name !== 'three_names' && name !== 'three_names_check') {
        let status = el('input[name="' + name + '"]').checked
        let payload = {};
        payload [ name ] = status
        //отправить феч на запись изменений
        await fetchData(url, payload, 'PUT');
    }

    //не давать поставить чекбокс пока незаполнен инпут
    if (name === 'three_names_check') {
        if( threeNamesInput.value.length < 3) {
            event.preventDefault()
            threeNamesInput.style.borderColor = "red"
            threeNamesInput.focus()
        } else {
            threeNamesCheckBox.checked = true
            threeNamesInput.style.borderColor = "gray"
            let payload = {};
            payload [ name ] = true
            //отправить феч на запись изменений
            await fetchData(url, payload, 'PUT');
        }
    }

    //изменение инпута с именами менторов
    if (name === 'three_names') {
        //сохранить value инпута после того как с него уберут фокус
        threeNamesInput.onblur = async () => { 
        let value = threeNamesInput.value
        let payload = {};
        payload [ name ] = value;
        //отправить феч
        await fetchData(url, payload, 'PUT');
        
        if(value.length === 0) {
            threeNamesCheckBox.checked = false
            }
        }
    }
})
