export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  marcarCompletado(identificador) {
    this.todos.find(({ id }) => id === identificador).completado = true;
    console.log(this.todos);
  }

  eliminarTodo(id) {
    const element = this.todos.findIndex((obj) => {
      return obj.id === id;
    });
    this.todos.splice(element, 1);
  }

  elimiarTodos() {}
}
