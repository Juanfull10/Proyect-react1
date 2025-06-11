import { TaskCreator } from "./components/TaskCreator"
import { useEffect, useState } from "react"
import TaskTable from "./components/TaskTable"
import { VisibilityControl } from "./components/VisibilityControl"

function App() {

  const [TaskItem, setTaskItem] = useState([])
  const [showCompleted, setshowComplete] = useState(false)

  const createNewTask = (taskName) => {

    if (!TaskItem.find(task => task.name === taskName)) {
      setTaskItem([...TaskItem, { name: taskName, done: false }])
    }

  }

  const toggleTask = (task) => {
    setTaskItem(TaskItem.map(t => (t.name == task.name) ? { ...t, done: !t.done } : t))
  }

  useEffect(() => {
    let data = localStorage.getItem('task');
    setTaskItem(JSON.parse(data));
  }, [])

  const cleanTask = () => {
    setTaskItem(TaskItem.filter(task => !task.done));
    setshowComplete(false);
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(TaskItem))

  }, [TaskItem])


  return (
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable task={TaskItem} toggleTask={toggleTask} />
        <VisibilityControl isChecked={showCompleted} setshowComplete={(checked) => setshowComplete(checked)} cleanTask={cleanTask} />
        {
          showCompleted === true ? (
            <TaskTable task={TaskItem} toggleTask={toggleTask} showCompleted={showCompleted} />
          ) : null
        }


      </div>
  )
}

export default App
