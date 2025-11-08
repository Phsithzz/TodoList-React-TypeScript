import type {Todo}  from "../models/todo"

interface Props {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-50 border rounded px-4 py-2 shadow-sm"
        >
          <span
            onClick={() => onToggle(todo.id)}
            className={`cursor-pointer select-none ${
              todo.completed ? "line-through text-gray-400" : "text-black"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
