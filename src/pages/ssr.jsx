import React from "react";

// Dummy JSON data
const dummyTodos = [
  { id: 1, title: "Learn Next.js", completed: true },
  { id: 2, title: "Build a portfolio", completed: false },
  { id: 3, title: "Explore SSR", completed: true },
  { id: 4, title: "Practice coding", completed: false },
];

export async function getServerSideProps() {
  // Simulate fetching data (you can replace this with an API call)
  const todos = dummyTodos;

  return {
    props: { todos }, // Pass the data as props to the component
  };
}

const TodoList = ({ todos }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do List (SSR)</h1>
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
