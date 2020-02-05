const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

let LIST = [];
let id = 0;

function addElement(toDo, id) {
    const text = `<li class="list__item">
                    <input type="checkbox" class="checkbox" id="${id}" job="complete">
                    <label class="label"> ${toDo}</label>
                    <span class="delete-icon" job="delete" id="${id}"></span>
                </li>`
    const position = 'beforeend'
    list.insertAdjacentHTML(position, text);
}

function completeToDo(element) {
    // element.toggle.checked;
    // console.log(element);
    element.parentNode.querySelector('.label').classList.toggle('line');
    // console.log('toggle ok');
    // if(element.checked) {
    //     // console.log('ok1', element.checked);
    //     element.checked = true;
    //     element.parentNode.querySelector('.label').classList.add('line');
    // }else {
    //     // console.log('ok2', element.checked);
    //     element.checked = false;
    //     element.parentNode.querySelector('.label').classList.remove('line');
    // }
}

function removeToDo(element) {

    // console.log(element.parentNode.parentNode, 'ok');
    element.parentNode.parentNode.removeChild(element.parentNode);
}


function pressBtn() {
    const toDo = input.value;
    if(toDo) {
        addElement(toDo, id);
        LIST.push(
            {
                name: toDo,
                id: id
            }
        );
        id++;
    }else {
        alert('Input is empty');
    }
    input.value = '';
}

list.addEventListener('click', function(event){
    console.log('OK');
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;
    if(elementJOB == 'complete') {
        completeToDo(element);
    }else if (elementJOB == 'delete') {
        // console.log("OK@");
        removeToDo(element);
    }
});
