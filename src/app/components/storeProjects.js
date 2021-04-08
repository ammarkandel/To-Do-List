const yourInput = document.querySelector('.input');
yourInput.addEventListener('change', (event) => {
  localStorage.setItem(event.target.value, []);
});
