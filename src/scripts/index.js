import '../scss/styles.scss';

// More Btns
const moreBtns = document.querySelectorAll('.todo__more');
moreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === 'More' ? 'Close' : 'More';
    btn.nextElementSibling.classList.toggle('open');
  });
});

// Add Todo Btns
const addTodoBtns = document.querySelectorAll('.add-todo-btn');
addTodoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === 'Add Todo' ? 'Close' : 'Add Todo';
    btn.nextElementSibling.classList.toggle('open');
  });
});

// Add Project Btns
const addPrBtns = document.querySelectorAll('.add-project-btn');
addPrBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === 'Add Project' ? 'Close' : 'Add Project';
    btn.nextElementSibling.classList.toggle('open');
  });
});

const openTab = (id) => {
  document.querySelectorAll('.project-tabs__item').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.project-container').forEach(item => {
    item.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  document.querySelector(`div[data-project='${id}']`).classList.add('active');
};

document.querySelectorAll('.project-tabs__item').forEach(tab => {
  tab.addEventListener('click', e => {
    openTab(e.target.getAttribute('data-project'));
  });
});

document.querySelector('.default-open').classList.add('active');
