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

if (el('.interestAntPorogressBar')) {
    document.querySelectorAll('.interestAntPorogressBar').forEach(i => {
        let bar = i.querySelector('.progressBar')
        let int = +i.querySelector('.interests').textContent.match(/\d+/)[0]

        switch(true) {
            case(int === 0): bar.style.backgroundColor = 'gray'; return true;
            case(int < 35): bar.style.backgroundColor = 'yellow'; return true;
            case(int > 35 && int < 60): bar.style.backgroundColor = 'blue'; return true;
            case(int > 60 && int < 85): bar.style.backgroundColor = 'white'; return true;
            case(int === 100): bar.style.backgroundColor = 'green'; return true;
        }
    })
    
}
