import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch to-dos
    const fetchTodos = async () => {
      setLoading(true);
      const dummyTodos = [
        { id: 1, title: "Learn Next.js", completed: true },
        { id: 2, title: "Build a portfolio", completed: false },
        { id: 3, title: "Explore CSR", completed: true },
        { id: 4, title: "Practice coding", completed: false },
      ];
      setTimeout(() => {
        setTodos(dummyTodos);
        setLoading(false);
      }, 1000); // Simulating a delay
    };

    fetchTodos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do List (CSR)</h1>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-2 mb-2 rounded ${
                todo.completed
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
