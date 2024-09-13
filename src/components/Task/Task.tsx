import { TaskT } from '../../App'

const Task = ({
  taskData,
  doneTask,
  deleteTask
} : {
  taskData : TaskT,
  doneTask : (id : number) => void,
  deleteTask : (id : number) => void
}) => {
  return (
    <div style={{margin : "10px", border : "2px solid black", padding : "10px", display : "flex", justifyContent: "space-between", alignItems : "center"}}>
        <div>
            <h1>{ taskData.status === "completed" ? <s>{taskData.title}</s> : taskData.title }</h1>
            <p>{taskData.description}</p>
        </div>
        <div>
            <button onClick={() => doneTask(taskData.id)}  style={{ margin : "10px", padding : "10px"}}> Done </button>
            <button onClick={() => deleteTask(taskData.id)} style={{ margin : "10px", padding : "10px"}}> Delete </button>
        </div>

    </div>
  )
}

export default Task