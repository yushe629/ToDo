import React,{useState} from 'react'
import EditForm from './editform'
import TaskItem from './TaskItem'
import  Todo from './Tasktype'
 
type Props = {
    tasks: Todo[]
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>
}
 
const TaskList: React.FC<Props> = ({ tasks, setTasks,}) => {


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

    const handleEdit = (task: Todo) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, editting: !task.editting }
                :t
            ))
        
    }
        
    
    const Edit = (task: Todo,input:string) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, name: input,editting:false }
                :t
            ))
        
    }

       const Editcancel = (task: Todo) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, editting:false }
                :t
            ))
        
        
    
}
 
    return (
        <div className="inner">
        {
            tasks.length <= 0 ? 'Todoを追加してください' :
            <ul className="task-list">
            {tasks.map(task => task.editting
                ? 　<EditForm
                    Edit={Edit}
                    task={task}
                    Editcancel={Editcancel}/>
                : (
                    <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                    handleEdit = {handleEdit}
                />
            )) }
            </ul>
        }
        </div>
    )
}
 
export default TaskList