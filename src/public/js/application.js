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
        let width = bar.getBoundingClientRect().width
        
        function getPersent(int) {
            return (width / 100) * int + 'px'
        }

        switch(true) {
            case(int === 0): bar.style.backgroundColor = 'gray'; return true;
            case(int < 35): bar.style.backgroundColor = 'red'; bar.style.width = getPersent(int); return true;
            case(int > 35 && int < 60): bar.style.backgroundColor = 'blue';  bar.style.width = getPersent(int);return true;
            case(int > 60 && int < 85): bar.style.backgroundColor = 'yellow';  bar.style.width = getPersent(int);return true;
            case(int === 100): bar.style.backgroundColor = 'green';  bar.style.width = getPersent(int);return true;
        }
    })
    
}
