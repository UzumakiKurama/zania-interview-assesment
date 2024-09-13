import React, { useState } from 'react'
import { TaskT } from '../../App';

const AddTask = ({
    cancelTask,
    addTask
} : {
    cancelTask : () => void,
    addTask : (task : TaskT) => void
}) => {
    const [title , setTitle] = useState<string>("");
    const [description , setDescription] = useState<string>("");
    const [category , setCategory] = useState<string>("");

    const onAddClickHandler = () => {
        const newTask = {
            id : Date.now(),
            title : title,
            description : description,
            status : "pending",
            category : category
        }
        addTask(newTask);
    }

  return (
    <div style={{border : "2px solid black", padding : "10px"}}>
        <h1>Add New Task</h1>
        <div>
            <label>Title</label> <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Description</label> <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            <label>Category</label> <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        
        <button onClick={onAddClickHandler}>Add</button>
        <button onClick={cancelTask}>Cancel</button>
    </div>
  )
}

export default AddTask