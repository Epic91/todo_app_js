// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Even Listeners
    //  adds new todos 
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // Create a <div>
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //  Create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // nest <li> inside of <div>
    todoDiv.appendChild(newTodo);

    // Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML  = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    // Nest <button> inside of <div>
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML  = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    // Nest <button> inside of <div>
    todoDiv.appendChild(trashButton);
    // Nest todoDiv inside of todoList div
    todoList.appendChild(todoDiv); 

    // Clear todo input value
    todoInput.value = "";
}