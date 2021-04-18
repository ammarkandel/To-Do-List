function deleteTodo(j) {
  const deleteTodo = document.getElementsByClassName('delete-todo');

  for (let i = 0; i < deleteTodo.length; i += 1) {
    deleteTodo[i].addEventListener('click', () => {
      const items = JSON.parse(localStorage[localStorage.key(j)]);
      items.splice(i, 1);
      localStorage.setItem(localStorage.key(j), JSON.stringify(items));
      window.location.reload();
    });
  }
}

export default deleteTodo;
