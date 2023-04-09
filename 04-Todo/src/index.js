//import { saludar } from "./js/componentes";
import "./styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

//Inicializar clase de lista de todos
//export const listaTodos = new TodoList();

const tarea1 = new Todo("Aprender javascript!!");
const tarea2 = new Todo("Otra tarea");
//const tarea2 = new Todo("Comprar leche");

//const lista = new TodoList();
//lista.nuevoTodo(tarea1);
crearTodoHtml(tarea1);
crearTodoHtml(tarea2);

//lista.nuevoTodo(tarea2);

//console.log(lista);
//lista.eliminarTodo(tarea2.id);
//console.log(lista);
//lista.marcarCompletado(tarea1.id);
