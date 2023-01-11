import { fetchData, fetchDataGet, el } from './helper.js';

if (el('#user-form')) {
    el('#user-form').addEventListener('click', async (target) => {
        const { name } = event.target;
        console.log(name)
        // el(`input[name="${name}"]`).checked
        el(`input[name="wifi"]`).checked = true
        el('#pass_key')

        fetchDataGet()

    }) 
}
