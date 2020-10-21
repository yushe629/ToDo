import React from 'react'
import TaskItem from './TaskItem'
import  Todo from './Tasktype'
 
type Props = {
    tasks: Todo[]
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>
}
 
const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
 
    const handleDone = (task: Todo) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, complete: !task.complete }
                : t
        ))
    }
 
    const handleDelete = (task: Todo) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }
 
    return (
        <div className="inner">
        {
            tasks.length <= 0 ? '登録されたTODOはありません。' :
            <ul className="task-list">
            { tasks.map( task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                />
            )) }
            </ul>
        }
        </div>
    )
}
 
export default TaskList