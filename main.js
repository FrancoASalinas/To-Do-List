const button = document.querySelector('.container__button');
const input  = document.querySelector('.container__input');
const ul = document.querySelector('.container__list');

button.addEventListener('click', () => createTask());

function createTask(){
    const div = document.createElement('div');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.setAttribute('class', 'list-item__delete-button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', (e) => e.target.parentElement.parentElement.remove());

    div.setAttribute('class', 'div');
    
    li.setAttribute('class', 'list-item');
    li.textContent = input.value;

    div.appendChild(li);
    ul.appendChild(div);

    li.appendChild(deleteButton);
    draggable(li);

    dropTo(div);

    input.value = '';
    input.focus();
}

function draggable(item){
    item.setAttribute('draggable', 'true');

    item.addEventListener('dragstart', (e) =>{
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
        dragend = e.target;
    })
}

let dragend;

function dropTo(item){
    item.addEventListener('dragover', (e)=>{
        e.preventDefault();
        if(dragend !== e.target){
            dragend.setAttribute('class', 'dragged');
            e.target.setAttribute('class', 'drag-over')
        }
    });

    item.addEventListener('dragleave', (e)=>{
        let elementsArr = e.target.parentElement.parentElement.children;
        for(element of elementsArr){
            element.firstChild.setAttribute('class', 'list-item')
        }
    })

    item.addEventListener('drop', (e)=>{
        dragend.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
        let elementsArr = e.target.parentElement.parentElement.children;
        for(element of elementsArr){
            element.firstChild.setAttribute('class', 'list-item')
        }
    })
}

