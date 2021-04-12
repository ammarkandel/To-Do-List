function editTodo(x) {
  const getEditIcon = document.querySelectorAll('.edit-btn');

  for (let i = 0; i < getEditIcon.length; i += 1) {
    getEditIcon[i].addEventListener('click', () => {
      const liToEdit = getEditIcon[i].nextSibling.nextSibling;
      const editForm = document.getElementById('edit-form');
      editForm.style.display = 'block';
      const editTitle = document.querySelector('.edit-title');
      const editDescription = document.querySelector('.edit-description');
      const editDuedate = document.querySelector('.edit-dueDate');
      const editSubmit = document.querySelector('.submit-edit');

      editSubmit.addEventListener('click', () => {
        const todos = JSON.parse(localStorage[localStorage.key(x)]);
        todos[i].title = editTitle.value;
        todos[i].description = editDescription.value;
        todos[i].date = editDuedate.value;
        localStorage.setItem(localStorage.key(x), JSON.stringify(todos));
      })

      liToEdit.replaceWith(editForm);
    })
  }
  
}

export default editTodo;