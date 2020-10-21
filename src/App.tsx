import React,{useState} from 'react'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'
import Todo from './Components/Tasktype'



const initialState: Todo[] = [
        {
            id: 2,
            task: '次にやるやつ',
            complete: false
        },{
            id: 1,
            task: 'はじめにやるやつ',
            complete: true
        }
    ]
 
const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)
 
    return (
        <div>
            <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
    )
}