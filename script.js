const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};

function addTodoToDom(todo) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
}

getTodos();
