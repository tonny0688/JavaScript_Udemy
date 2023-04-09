import { Todo } from "../classes";
import { listaTodos } from "../index";

//Referencias HTML
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li class=${todo.completado ? "completed" : ""} data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${
          todo.completado ? "checked" : ""
        }>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

  //Elemento HTML
  const divHtml = document.createElement("div");
  divHtml.innerHTML = htmlTodo;

  divTodoList.append(divHtml.firstElementChild);

  return divHtml.firstChild;
};

//Eventos
//txtInput.addEventListener("keyup", (event) => {
//  if (event.keyCode === 13 && txtInput.value != "") {
//    const nuevoTarea = new Todo(txtInput.value);
//    listaTodos.nuevoTodo(nuevoTarea);
//    console.log(listaTodos);
//    crearTodoHtml(nuevoTarea);
//    txtInput.value = "";
//  }
//});
