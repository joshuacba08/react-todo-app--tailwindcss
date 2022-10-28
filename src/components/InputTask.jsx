import React, { useState } from "react";

const InputTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInput = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskObject = {
      description: newTask,
      date: new Date(),
      status: false
    };
    addTask(newTaskObject);
    setNewTask('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-10/12 bg-slate-800 h-12 rounded-lg mx-auto px-4 flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full border border-solid border-slate-500"></div>
      <input
        className="bg-transparent text-white outline-none"
        type="text"
        placeholder="Create a new todo"
        value={newTask}
        onChange={handleInput}
      />
    </form>
  );
};

export default InputTask;
