const submitProjects = document.querySelector('.submit');

const lists = [];

window.onload = () => {
  updateProjects();
};

submitProjects.addEventListener('click', () => {
  updateProjects();
});

const updateProjects = () => {
  const projectNameVal = document.querySelector('.input');
  localStorage.setItem(projectNameVal.value, JSON.stringify(lists));
};
