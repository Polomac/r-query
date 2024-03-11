import { useZustandStore } from '../store/zustandStore'
import { useState } from 'react'
import './AddTask.scss'
const AddTask = ({ tasks }) => {
  const [status, setStatus] = useState(null)
  const [title, setTitle] = useState('')

  const addTask = useZustandStore((store) => store.addTask)

  const handleAdd = () => {
    if (status && title !== '') {
      addTask({ title: title, status: status, id: Math.floor(Math.random() * 100) })
      setTitle('')
      setStatus(null)
    }
  }
  return (
    <div className='add-task-form'>
      <h5>Please add the task</h5>
      <select className="form-select mb-4" aria-label="Default select example" onChange={(evt) => setStatus(evt.target.value)}>
        <option selected={ status === null }>Select status...</option>
        <option value="TODO">TODO</option>
        <option value="ONGOING">ONGOING</option>
        <option value="DONE">DONE</option>
      </select>
      <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} className='d-flex mb-4' placeholder='Add task title...'/>
      <button onClick={handleAdd} disabled={ title === '' || status === null }>Add</button>
    </div>
  )
}

export default AddTask