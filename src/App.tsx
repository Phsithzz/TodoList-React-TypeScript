import { useState } from "react";
//model
import type {Todo}  from "./models/todo";
//component
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="bg-black/50 fixed right-0 top-0 flex items-center  justify-center w-full h-full z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-[500px] h-[300px] flex flex-col space-y-4">
          <h1 className="text-2xl text-center font-semibold">Todo List</h1>
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </>
  );
};

export default App;
