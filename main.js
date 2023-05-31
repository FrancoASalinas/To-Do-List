const button = document.querySelector('.button');
const input  = document.querySelector('.input');
const ul = document.querySelector('.to-do-list');

button.addEventListener('click', () => createTask());

function createTask(){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', (e) => console.log(e.target.parentElement.remove()));
    
    li.setAttribute('class', 'list-item');
    li.textContent = input.value;

    let sexo = createElement('div', ul, 'div-drop');
    ul.appendChild(li);
    createElement('div', ul, 'div-drop');

    li.appendChild(deleteButton);
    draggable(li);

    input.value = '';
    input.focus();
    console.log(sexo)
}

function createElement(element, parent, className){
    element = document.createElement(`${element}`);
    parent.appendChild(element);
    element.setAttribute('class', `${className}`);
    return element
}

function draggable(item, dropElement){
    item.setAttribute('draggable', 'true');

    item.addEventListener('dragstart', (event) =>{
        event.dataTransfer.effectAllowed = 'move';
    })

    dropElement
}

