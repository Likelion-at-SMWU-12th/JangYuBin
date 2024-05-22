const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("#todoInput");
const addButton = todoForm.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

const todoArr = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArr.pop();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodo;
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todoArr.push(newTodo);
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
addButton.addEventListener("click", handleTodoForm);
