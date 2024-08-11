import React, { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <InputField />
    </>
  );
}

function InputField() {
  const [inputValue, setInputValue] = useState(''); // Initialize with an empty string
  const [todoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://sum-server.100xdevs.com/todo?id=${todoId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setTodos(data.todo); // Assuming data.todo is an object with id, title, description, completed
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchData();
  }, [todoId]);

  const onchangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onclickHandler = () => {
    setTodoId(parseInt(inputValue, 10));
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={onchangeHandler} />
      <input type="button" value="Click me" onClick={onclickHandler} />

      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
      {/* Add other fields as needed */}
    </>
  );
}

export default App;

