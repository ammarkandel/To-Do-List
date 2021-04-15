import deleteTodo from './deleteTodo';
import editTodo from './editTodo';
import priority from './priorityAction';

const infoBtn = document.getElementsByClassName('fa-info-circle');
const listTitle = document.querySelector('.project-title');

for (let i = 0; i < infoBtn.length; i += 1) {
  infoBtn[i].addEventListener('click', () => {
    let getItem = localStorage.key(i);
    const belongsToDos = JSON.parse(localStorage[getItem]);
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
      const priorityInput = document.createElement('input');

      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit';
      rmIcon.classList.add('fas');
      rmIcon.classList.add('fa-trash-alt');
      rmIcon.classList.add('delete-todo');
      priorityInput.classList.add('priority');
      priorityInput.setAttribute('type', 'checkbox');
      if (belongsToDos[j].priority === false) {
        priorityInput.setAttribute('checked', 'checked');
      }


      div.appendChild(editBtn);
      div.appendChild(rmIcon);
      div.appendChild(priorityInput);
      div.appendChild(li);
      displayTodos.appendChild(div);
    }

    priority(i);
    editTodo(i);
    deleteTodo(i);
  });
}
