import './Task.scss'
import { useZustandStore } from '../store/zustandStore'

const Task = ({ task }) => {
  const removeTask = useZustandStore((store) => store.removeTask)
  const handleClick = () => {
    removeTask(task.id)
  } 
  return (
    <div className="task" key={task.id}>
      <p>{task.title}</p>
      <p>{task.status}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Task