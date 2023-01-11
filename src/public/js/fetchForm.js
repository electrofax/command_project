import { fetchData, fetchDataGet, el, checkInput } from './helper.js';

let url = '/api/form'
const resp = await fetchDataGet(url + '/1')

if (resp.pass_key)          { el('input[name="pass_key"]').checked = true }
if (resp.wifi)              { el('input[name="wifi"]').checked = true }
if (resp.laptop)            { el('input[name="laptop"]').checked = true }
if (resp.email_pass)        { el('input[name="email_pass"]').checked = true }
if (resp.stationery)        { el('input[name="stationery"]').checked = true }
if (resp.meet_head)         { el('input[name="meet_head"]').checked = true }
if (resp.chattochat)        { el('input[name="chattochat"]').checked = true }
if (resp.skans_of_docks)    { el('input[name="skans_of_docks"]').checked = true }
if (resp.com_secret)        { el('input[name="com_secret"]').checked = true }
if (resp.first_task)        { el('input[name="first_task"]').checked = true }
if (resp.email_sign)        { el('input[name="email_sign"]').checked = true }
if (resp.three_names_check) { el('input[name="three_names_check"]').checked = true }
if (resp.three_names)       { el('input[name="three_names"]').value = resp.three_names }


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
