import { criminals } from './criminals.js';


for (let criminal of criminals) {
    showCriminals(criminal);
}


function showCriminals(criminal) {
    const criminalDiv = document.createElement('div');
    criminalDiv.className = 'criminal';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${criminal.id}?set=set5`;
    img.alt = criminal.name

    const name = document.createElement('p')
    name.className = 'name';
    name.innerText = criminal.name

    const email = document.createElement('p')
    email.className = 'email';
    email.innerText = criminal.email

    criminalDiv.append(img, name, email);

    document.querySelector('.criminals').append(criminalDiv);
}

notFound()
function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span')
    span.innerText = '404';

    const h1 = document.createElement('h1')
    h1.innerText = '🧟‍♂️ No Criminal Found 🧟‍♂️';
    notFoundDiv.append(span, h1);

    document.querySelector('.criminals').append(notFoundDiv);
}

document
    .querySelector('#search-criminal')
    .addEventListener('keyup', function (e) {
        const keyword = e.target.value.toLowerCase();

        const criminals = document.querySelectorAll('.criminal')

        notFound = true;

        for (let criminal of criminals) {
            const name = criminal.children[1].innerText.toLowerCase();
            const email = criminal.children[2].innerText.toLowerCase();

            if (name.includes(keyword) || email.includes(keyword)) {
                criminal.style.display = 'block';
                notFound = false;
            } else criminal.style.display = 'none';
        }

        if (notFound) {
            document.querySelector('.not-found').style.display = 'block';
        } else document.querySelector('.not-found').style.display = 'none';
    })

document.querySelector('#search-criminal-form').addEventListener('submit', e => { e.preventDefault() });