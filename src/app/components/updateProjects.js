import CheckList from './checkList';

const btn = document.querySelector('.submit');

const lists = [];

btn.addEventListener('click', ()=> {
  const projectNameVal = document.querySelector('.input');
  const displayProjects = document.querySelector('.display-projects');
  localStorage.setItem(projectNameVal.value, JSON.stringify(lists));
  const li = document.createElement('li');
  li.textContent = projectNameVal.value;
  projectNameVal.value = '';

  displayProjects.appendChild(li);
});
