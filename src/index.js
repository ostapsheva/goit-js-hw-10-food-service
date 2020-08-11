import './styles.css';
import menuData from './menu.json';
import itemTemplate from './item.hbs';

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('input.js-switch-input'),
  menuList: document.querySelector('ul.js-menu'),
};

const items = itemTemplate(menuData);
refs.menuList.insertAdjacentHTML('beforeend', items);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkThemeColor = function () {
  if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
    refs.body.classList.add('light-theme');
  } else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
    refs.body.classList.add('dark-theme');
    refs.input.checked = true;
  }
};
checkThemeColor();

const changeThemeColor = function (e) {
  if (e.target.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else if (!e.target.checked) {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
};
refs.input.addEventListener('click', changeThemeColor);
