import React,{useState} from 'react'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'
import Todo from './Components/Tasktype'



const initialState: Todo[] = [
        {
            id: 2,
            task: '2つ目のタスク',
            complete: false
        },{
            id: 1,
            task: '1つ目のタスク',
            complete: true
        }
    ]
 
const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)
 
    return (
      <div>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <p>タスク一覧</p>
            <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
    )
}

export default App