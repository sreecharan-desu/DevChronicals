import React, { useEffect, useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://sum-server.100xdevs.com/todos');
        const data = await result.json();
        const finalData = data.todos;
        console.log(finalData)
        setTodos(finalData); // Update todos state with fetched data
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Done" : "Not done"}</p>
        </div>
      ))}
    </>
  );
}

export default Todos;
