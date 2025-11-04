import type { Todo } from "../models";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completada" : "Pendiente"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
