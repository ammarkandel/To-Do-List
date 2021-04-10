import CheckList from './checkList';

const submitForm = document.querySelector('.submit-list');
const projectTitleText = document.querySelector('.project-title');
const listDescription = document.querySelector('.list-description');
const listTitle = document.querySelector('.list-title');
const listDate = document.querySelector('.dueDate');

submitForm.addEventListener('click', (e)=> {
  e.preventDefault();
  let getI = projectTitleText.textContent;
  let testt = JSON.parse(localStorage.getItem(getI));
  let check = CheckList(listTitle.value, listDescription.value, listDate.value);
  testt.push({'title': check.printTitle, 'description':check.printDescription, 'date': check.printDate});
  localStorage.setItem(getI, JSON.stringify(testt));

  const lastAdd = testt.pop();
  const li = document.createElement('li');
  const displayTodos = document.querySelector('.display-todos');

  li.textContent = `Title:: ${lastAdd['title']} || Description:: ${lastAdd['description']} || Date:: ${lastAdd['date']}`;
  displayTodos.appendChild(li);
});
