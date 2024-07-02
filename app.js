let list = document.querySelector('.todos');
const generateTemplate = todo =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-centre text-light">
            <span>${todo}</span>
            <i class="fa-regular fa-trash-can delete" style="color: #FFFFFF;"></i>
        </li>`;
    list.innerHTML += (html);
}

const addForm = document.querySelector('.add');
addForm.addEventListener('submit',e=>{
    e.preventDefault()

    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
const filter = query => {
        Array.from(list.children)
             .filter( todo => !todo.textContent.toLowerCase().includes(query))
             .forEach(todo => todo.classList.add('filtered'))

        Array.from(list.children)
             .filter( todo => todo.textContent.toLowerCase().includes(query))
             .forEach(todo => todo.classList.remove('filtered'))
}


const search = document.querySelector('.search input');
search.addEventListener('keyup', e=>{
    const query = search.value.trim().toLowerCase();
    filter(query) 
});