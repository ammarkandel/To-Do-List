import CheckList from './checkList';

const submitForm = document.querySelector('.submit-list');
const projectTitleText = document.querySelector('.project-title');
const listDescription = document.querySelector('.list-description');
const listTitle = document.querySelector('.list-title');
const listDate = document.querySelector('.dueDate');

submitForm.addEventListener('click', () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const todosData = JSON.parse(localStorage[localStorage.key(i)]);
    const check = CheckList(listTitle.value, listDescription.value, listDate.value, true);
    todosData.push({
      title: check.printTitle,
      description: check.printDesc,
      date: check.printDate,
      priority: check.printPriority,
    });
    localStorage.setItem(localStorage.key(i), JSON.stringify(todosData));
  }
});
