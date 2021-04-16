const submitProjects = document.querySelector('.submit');
const projectNameVal = document.querySelector('.input');

if (localStorage.length === 0) {
  localStorage.setItem(projectNameVal.value, JSON.stringify([]));
}

submitProjects.addEventListener('click', () => {
  updateProjects();
});

const updateProjects = () => {
  localStorage.setItem(projectNameVal.value, JSON.stringify([]));
};
