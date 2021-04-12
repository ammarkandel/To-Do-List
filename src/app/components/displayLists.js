import deleteTodo from './deleteTodo';
import editTodo from './editTodo';

const infoBtn = document.getElementsByClassName('fa-info-circle');
const listTitle = document.querySelector('.project-title');

for (let i = 0; i < infoBtn.length; i += 1) {
  infoBtn[i].addEventListener('click', () => {
    const belongsToDos = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const displayTodos = document.querySelector('.display-todos');
    const targetText = localStorage.key(i);
    listTitle.textContent = targetText;
    const AllToDos = document.getElementById('all-todos');
    AllToDos.style = 'display: block';
    displayTodos.innerHTML = '';

    for (let j = 0; j < belongsToDos.length; j += 1) {
      const li = document.createElement('li');
      const div = document.createElement('div');
      li.textContent = `Title:: ${belongsToDos[j].title} ||| Description:: ${belongsToDos[j].description} ||| Date:: ${belongsToDos[j].date}`;
      const rmIcon = document.createElement('i');
      const editBtn = document.createElement('button');

      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit'
      rmIcon.classList.add('fas');
      rmIcon.classList.add('fa-trash-alt');
      rmIcon.classList.add('delete-todo');
      div.appendChild(editBtn);
      div.appendChild(rmIcon);
      div.appendChild(li);
      displayTodos.appendChild(div);
    }

    editTodo(i);
    deleteTodo(i);
  });
}
