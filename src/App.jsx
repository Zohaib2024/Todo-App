import { useState } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    settodo("");
  };

  const handlechange = (e) => {
    settodo(e.target.value);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((item) => item.id === id);
    settodo(todoToEdit.todo); // Pre-fill the input with the current todo text
    settodos(todos.filter((item) => item.id !== id)); // Remove the todo for editing
  };

  const handledelete = (id) => {
    settodos(todos.filter((item) => item.id !== id));
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    settodos(newTodos);
  };

  return (
    <>
   
      <div className="m-10 my-5 rounded-xl p-5 text-center bg-violet-200 min-h-[80vh]">
        <div className="AddTodo my-5">
          <div className="font-bold">
            <h1 className="text-xl mb-4">Add Todo</h1>
            <input
              type="text"
              className="w-1/2 border border-gray-400 p-2 rounded"
              onChange={handlechange}
              value={todo}
            />
            <button
              onClick={handleAdd}
              className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6"
            >
              Add
            </button>
          </div>
        </div>
        <h1 className="font-bold text-xl mb-4">Your Todos</h1>
        <div className="todos w-1/2 mx-auto"> {/* Center the todo container */}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex items-center justify-between my-3 bg-white shadow-md rounded p-4"
              >
                <input
                  name={item.id}
                  onClick={handleCheckBox}
                  type="checkbox"
                  checked={item.iscompleted}
                  id=""
                  className="mr-2"
                />
                <div className={item.iscompleted ? "line-through flex-grow text-left" : "flex-grow text-left"}>
                  {item.todo}
                </div>
                <div className="btn flex space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handledelete(item.id)}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
