export class Todo {
  constructor(tarea) {
    this.tarea = tarea;
    this.id = Math.random().toString(36).substr(2, 18);
    this.completado = false;
    this.creado = new Date();
  }
}
