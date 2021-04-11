import deleteTodo from './deleteTodo';

const infoBtn = document.getElementsByClassName('fa-info-circle');
const listTitle = document.querySelector('.project-title');

for (let i = 0; i < infoBtn.length; i++) {
  infoBtn[i].addEventListener('click', ()=> {
    let belongsToDos = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const displayTodos = document.querySelector('.display-todos');
    const targetText = localStorage.key(i);
    listTitle.textContent = targetText;
    const AllToDos = document.getElementById('all-todos');
    AllToDos.style = 'display: block';
    displayTodos.innerHTML = '';

    for (let j = 0; j < belongsToDos.length; j++) {
      const li = document.createElement('li');
      li.textContent = `Title:: ${belongsToDos[j].title} ||| Description:: ${belongsToDos[j].description} ||| Date:: ${belongsToDos[j].date}`;
      const rmIcon = document.createElement('i');
      rmIcon.classList.add('fas');
      rmIcon.classList.add('fa-trash-alt');
      rmIcon.classList.add('delete-todo');
      li.appendChild(rmIcon);
      displayTodos.appendChild(li);
    }

    deleteTodo(i);
  });
}
