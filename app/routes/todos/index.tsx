import { useLoaderData } from "react-router";
import type { Todo } from "./models";
import TodoList from "./components/TodoList";

const todos: Todo[] = [
  { id: "1", title: "Aprender Remix", completed: false },
  { id: "2", title: "Construir una aplicación Remix", completed: false },
  { id: "3", title: "Desplegar la aplicación", completed: false },
];

export const action = async ({ request }: { request: Request }) => {
  const body = await request.formData();
  const title =
    body.get("title")?.toString() || `Nueva tarea ${todos.length + 1}`;
  todos.push({
    id: String(todos.length + 1),
    title,
    completed: false,
  });
  return null;
};
export const loader = () => {
  return todos;
};

const Todos = () => {
  const todoList = useLoaderData<Todo[]>();
  return (
    <div
      className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-200"
      style={{ color: "#000000" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Mis tareas
      </h1>
      <TodoList todos={todoList} />
      <form method="post" className="flex gap-4 mt-8">
        <input
          name="title"
          type="text"
          placeholder="Título de la tarea"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  );
};

export default Todos;
