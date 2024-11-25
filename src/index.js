import './styles.css';
import navBarSection from './nav-bar';

console.log('hello, odinite!');

const buttonList = Array.from(document.querySelectorAll('.task-status'));

buttonList.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('task-status--pending');
  });
});

localStorage.setItem('colorSetting', '#a4509b');
sessionStorage.setItem('username', 'JohnDoe');

console.log(localStorage);

const containerDiv = document.querySelector('.container');

// containerDiv.insertAdjacentElement('afterbegin', navBarSection);
