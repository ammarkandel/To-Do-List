const deleteProject = document.getElementsByClassName('delete-project');

for (let i = 0; i < deleteProject.length; i++) {
  deleteProject[i].addEventListener('click', ()=> {
    localStorage.removeItem(localStorage.key(i));
    window.location.reload();
  });
}
