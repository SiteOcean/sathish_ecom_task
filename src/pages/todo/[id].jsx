import React from "react";

// Dummy JSON data
const dummyTodos = [
  { id: 1, title: "Learn Next.js", completed: true },
  { id: 2, title: "Build a portfolio", completed: false },
  { id: 3, title: "Explore Static Paths", completed: true },
  { id: 4, title: "Practice coding", completed: false },
];

// `getStaticPaths` defines the dynamic routes to pre-render
export async function getStaticPaths() {
  const paths = dummyTodos.map((todo) => ({
    params: { id: todo.id.toString() }, // Define paths dynamically
  }));
  console.log(paths)
  return { paths, fallback: false }; // `fallback: false` ensures only these paths are valid
}

// `getStaticProps` fetches data for each dynamic route
export async function getStaticProps({ params }) {
    console.log(params)
  const todo = dummyTodos.find((item) => item.id.toString() === params.id);

  return {
    props: { todo }, // Pass the specific to-do as props
  };
}

const TodoDetails = ({ todo }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do Details</h1>
        <p className="text-lg mb-2">
          <strong>Title:</strong> {todo.title}
        </p>
        <p className="text-lg">
          <strong>Status:</strong>{" "}
          {todo.completed ? "Completed ✅" : "Incomplete ❌"}
        </p>
      </div>
    </div>
  );
};

export default TodoDetails;
