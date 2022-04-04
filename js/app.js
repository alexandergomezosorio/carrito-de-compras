const row = document.querySelector('#row');
const card = document.createElement('div');
const nombreCurso = document.createElement('h2');
const imgenCurso = document.createElement('img');
const nombreProfe = document.createElement('p');
const button = document.createElement('button');

button.textContent = 'agregar al carrito';
nombreCurso.textContent = 'Node js Avanzado';
imgenCurso.src = '../img/nodejs.jpg';
imgenCurso.classList.add('imagen-curso', 'u-full-width')

nombreProfe.textContent = 'jaime';

card.append(imgenCurso, nombreCurso, nombreProfe, button);
row.append(card);


const row2 = document.querySelector('#row2');
const card2 = document.createElement('div');
const nombreCurso2 = document.createElement('h2');
const imgenCurso2 = document.createElement('img');
const nombreProfe2 = document.createElement('p');
const button2 = document.createElement('button');

button2.textContent = 'agregar al carrito';
nombreCurso2.textContent = 'React';
imgenCurso2.src = '../img/react.png';
imgenCurso2.classList.add('imagen-curso', 'u-full-width')

nombreProfe2.textContent = 'Alex';

card2.append(imgenCurso2, nombreCurso2, nombreProfe2, button2);
row2.append(card2);