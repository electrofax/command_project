import { el, copyURI } from './helper.js';

if(el('input')) {
    el('input').focus()
}

if(el('#copyyLink')) {
    document.querySelectorAll('#copyyLink').forEach(i => {
        i.addEventListener('click', async (event) => {
            copyURI(event)
            i.style.opacity = '0.5'
            })
    })

}

