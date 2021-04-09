import CheckList from './checkList';

const allChilds = document.querySelector('.display-projects').childNodes;
const listTitle = document.querySelector('.project-title');
const arr = [...allChilds];

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('click', (e)=> {
    const checkLists = document.querySelector('.check-lists');
    listTitle.textContent = e.target.textContent;

    checkLists.setAttribute('style', 'display: block');
  });
}


/*

let testt = JSON.parse(localStorage.getItem(e.target.textContent));

testt.push(CheckList('akakak', 'jjjdjdjdjdj'));

localStorage.setItem(e.target.textContent, testt);

*/