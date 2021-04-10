const deleteProject = document.getElementsByClassName('fa-trash-alt');

for (let i = 0; i < deleteProject.length; i++) {
  deleteProject[i].addEventListener('click', ()=> {
    localStorage.removeItem(localStorage.key(i));
    window.location.reload();
  });
}