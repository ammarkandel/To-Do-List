let projectsNames = [];

for (let key in localStorage) {
  projectsNames.push(key);
}

const displayProjects = document.querySelector('.display-projects');

for (let i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
  li.textContent = projectsNames[i];
  displayProjects.appendChild(li);
}

export default  projectsNames;
