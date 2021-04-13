function priority(b) {
  const priorityInput = document.getElementsByClassName('priority');

  for (let i = 0; i < priorityInput.length; i += 1) {
    priorityInput[i].addEventListener('click', () => {
      const items = JSON.parse(localStorage[localStorage.key(b)]);
      if (items[i].priority == true) {
        items[i].priority = false;
        localStorage.setItem(localStorage.key(b), JSON.stringify(items));
      } else {
        items[i].priority = true;
        localStorage.setItem(localStorage.key(b), JSON.stringify(items));
      }
    })
  }
}

export default priority;
