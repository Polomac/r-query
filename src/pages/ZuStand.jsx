import { useZustandStore } from '../store/zustandStore'
import { shallow } from 'zustand/shallow'
import AddTask from '../components/AddTask'
import Task from '../components/Task'
const ZuStand = () => {
  const tasks = useZustandStore(
    (store) => {
      return store.tasks
    },
    shallow, // Prevents re-render on change of child comp state, it can be substituted with useMemo hook
  )

  return (
    <div className="container-lg p-3 pt-3 pt-sm-5">
      <h1>ZuStand</h1>
      { tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
      <AddTask tasks={tasks}/>
    </div>
  )
}

export default ZuStand