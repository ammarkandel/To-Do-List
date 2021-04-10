const displayProjects = document.querySelector('.display-projects');
const addProjectsBtn = document.querySelector('.add-projects');
const submitProjectsForm = document.getElementById('submit-projects');

addProjectsBtn.addEventListener('click', ()=> {
  submitProjectsForm.style = 'display: block';
})

for (let i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
  const iElRem = document.createElement('i');
  const iElInfo = document.createElement('i');

  iElRem.classList.add('fas');
  iElRem.classList.add('fa-trash-alt');
  iElInfo.classList.add('fas');
  iElInfo.classList.add('fa-info-circle');
  li.textContent = localStorage.key(i);
  displayProjects.appendChild(iElRem);
  displayProjects.appendChild(iElInfo);
  displayProjects.appendChild(li);
}
