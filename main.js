const button = document.querySelector('.container__button');
const input = document.querySelector('.container__input');
const ul = document.querySelector('.container__list');
const deleteButton = document.querySelector('.container__delete');

button.addEventListener('click', createTask);

deleteButton.addEventListener('click', () => {
  ul.innerHTML = '';
});

function createTask() {
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.classList.add('div');
  div.appendChild(addListItem(li));
  ul.appendChild(div);
  draggable(li);
  dropTo(div);

  input.value = '';
  input.focus();
}

function addListItem(li) {
  if (input.value === '') return;

  li.classList.add('list-item');
  li.textContent = input.value;

  return li;
}

function draggable(item) {
  item.setAttribute('draggable', 'true');

  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);

    dragend = e.target;
  });
}

let dragend;

function dropTo(item) {
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (dragend !== e.target) {
      dragend.classList.add('dragged');
      e.target.classList.add('drag-over');
    }
  });

  item.addEventListener('dragleave', (e) => {
    let elementsArr = e.target.parentElement.parentElement.children;
    for (element of elementsArr) {
      element.firstChild.classList.remove('drag-over');
    }
  });

  item.addEventListener('drop', (e) => {
    dragend.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    let elementsArr = e.target.parentElement.parentElement.children;
    for (element of elementsArr) {
      element.firstChild.classList.remove('class', 'drag-over');
      element.firstChild.classList.remove('class', 'dragged');
    }
  });
}
