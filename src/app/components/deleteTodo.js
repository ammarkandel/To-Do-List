function deleteTodo(j) {
  const deleteTodo = document.getElementsByClassName('delete-todo');

  for (let i = 0; i < deleteTodo.length; i =+ 1) {
    deleteTodo[i].addEventListener('click', () => {
      deleteTodo[i].parentElement.style.display = 'none';
      const items = JSON.parse(localStorage[localStorage.key(j)]);
      items.splice(i, 1);
      localStorage.setItem(localStorage.key(j), JSON.stringify(items));
    });
  }
}

export default deleteTodo;
