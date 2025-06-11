import React from 'react'
import TaskRoad from './TaskRoad'

export default function TaskTable({ task, toggleTask , showCompleted=false}) {

    const TaskTableRows = (donValue) => {
       return(
         task
         .filter(task=>task.done===donValue)
         .map(task => (
            <TaskRoad task={task} key={task.name} toggleTask={toggleTask} />
        ))
       )
    }


    return (
        <table className='table table-dark table-striped table-bordered border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {

                    TaskTableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}
