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

// ===View functions
const bodyAddClass = function (name) {
  refs.body.classList.add(name);
};
const bodyRemoveClass = function (name) {
  refs.body.classList.remove(name);
};
// ===Modal functions
const localStorageAddItem = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

const checkThemeColor = function () {
  if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
    bodyAddClass('light-theme');
  } else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
    bodyAddClass('dark-theme');
    refs.input.checked = true;
  }
};
checkThemeColor();

const changeThemeColor = function (e) {
  if (e.target.checked) {
    bodyRemoveClass('light-theme');
    bodyAddClass('dark-theme');
    localStorageAddItem('theme', Theme.DARK);
  } else if (!e.target.checked) {
    bodyRemoveClass('dark-theme');
    bodyAddClass('light-theme');
    localStorageAddItem('theme', Theme.LIGHT);
  }
};
refs.input.addEventListener('click', changeThemeColor);
