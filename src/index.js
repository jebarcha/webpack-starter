import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo('test');
todoList.todos[0].imprimirClase();

//console.log(todoList.todos);

// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('my-key', JSON.stringify(todoList));
// setTimeout(() => {
//     localStorage.removeItem('my-key')
// }, 2000)