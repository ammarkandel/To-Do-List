const submitProjects = document.querySelector('.submit');

const lists = [];

submitProjects.addEventListener('click', ()=> {
  const projectNameVal = document.querySelector('.input');
  localStorage.setItem(projectNameVal.value, JSON.stringify(lists));
});
