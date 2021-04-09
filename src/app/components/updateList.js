import CheckList from './checkList';

const submitForm = document.querySelector('.submit-list');
const projectTitleText = document.querySelector('.project-title');
const listDescription = document.querySelector('.list-description');
const listTitle = document.querySelector('.list-title');

submitForm.addEventListener('click', (e)=> {
  e.preventDefault();
  let getI = projectTitleText.textContent;
  let testt = JSON.parse(localStorage.getItem(getI));
  let check = CheckList(listTitle.value, listDescription.value);
  testt.push({'title': check.printTitle, 'description':check.printDescription});

  localStorage.setItem(getI, JSON.stringify(testt));
})