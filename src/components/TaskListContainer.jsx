import React, { useState } from 'react'
import InputTask from './InputTask'
import TaskList from './TaskList'

const TaskListContainer = () => {

  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) =>{
    newTask.id=tasks.length + 1;
    setTasks([...tasks, newTask])
  }

  const changeStatus = (id) => {
    const newArrayTasks = tasks.map( task => {
      if(task.id === id ){
        task.status = !task.status;
      }
      return task;
    });
    setTasks(newArrayTasks);
  }

  return (
    <main>

        <InputTask addTask={addNewTask} />
        <TaskList tasks={tasks} changeStatus={changeStatus} />

    </main>
  )
}

export default TaskListContainer