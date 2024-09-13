import { useState } from 'react';
import './App.css';
import initialData from './assets/data.json';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';

export interface TaskT {
  id : number,
  category : string,
  title : string,
  status : string,
  description : string
}
function App() {

  const [tasks, setTasks] = useState<TaskT[]>(initialData);
  const [showAddTask, setShowAddTask] = useState<boolean>(false);

  const addTaskHandler = () => {
    setShowAddTask(true);
  }

  const cancelAddTask = () => {
    setShowAddTask(false);
  }

  const addTask = (task : TaskT) => {
    setTasks(prevState => [task, ...prevState]);
  }

  const doneTask = (id : number) => {
    setTasks(prevState => {
      const newState = prevState.map(item => {
        if(item.id===id){
          return {...item, status : "completed"}
        }else {
          return item;
        }
      })
      return newState;
    })
  }

  const deleteTask = (id : number) => {
    setTasks(prevState => {
      const newState = prevState.filter(item => item.id !== id);
      return newState;
    })
  }

  return (
    <div className="App">
      <h1 style={{fontSize : "1.5rem", textDecoration: "underline"}}> Zania Task Management System </h1>
      
      <button onClick={addTaskHandler} style={{marginBottom : "10px"}}> Add Task </button>
      {
        showAddTask && <div><AddTask cancelTask={cancelAddTask} addTask={addTask} /></div>
      }
      
      <div style={{border : "2px solid black", padding : "20px"}}>
        {
          tasks.map(task => <Task doneTask={doneTask} deleteTask={deleteTask} taskData={task} />)
        }
      </div>
    </div>
  );
}

export default App
