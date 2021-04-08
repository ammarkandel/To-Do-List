let projectsNames = [];

for (let key in localStorage) {
  projectsNames.push(key);
}

let liContent = projectsNames.slice(0, projectsNames.length - 6);

const displayProjects = document.querySelector('.display-projects');

for (let i = 0; i < liContent.length; i++) {
  const li = document.createElement('li');
  li.setAttribute('data-number', i);
  li.textContent = liContent[i];
  displayProjects.appendChild(li);
}

