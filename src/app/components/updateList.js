import CheckList from './checkList';

const submitForm = document.querySelector('.submit-list');
const projectTitleText = document.querySelector('.project-title');
const listDescription = document.querySelector('.list-description');
const listTitle = document.querySelector('.list-title');
const listDate = document.querySelector('.dueDate');

submitForm.addEventListener('click', () => {
  const getI = projectTitleText.textContent;
  const testt = JSON.parse(localStorage.getItem(getI));
  const check = CheckList(listTitle.value, listDescription.value, listDate.value, false);
  testt.push({ title: check.printTitle, description: check.printDesc, date: check.printDate, priority: check.printPriority });
  localStorage.setItem(getI, JSON.stringify(testt));
});
