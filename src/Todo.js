import { useEffect, useState } from "react";
import Task from "./Task";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function addTodo() {
    const newTodo = { id: Date.now(), text: todoInput };
    setTodos((todos) => [...todos, newTodo]);
    setTodoInput('');
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function editTodo(id, editedText) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
  }

  return (
    <>
      <input
        className="todoer"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <Task
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={(editedText) => editTodo(todo.id, editedText)}
          />
        ))}
      </ul>
    </>
  );
}