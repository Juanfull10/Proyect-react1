import React from 'react'

export default function TaskRoad({task, toggleTask}) {
    return (
        <>
            <tr>
                <td className='d-flex justify-content-between'>
                    {task.name}
                    <input type="checkbox" checked={task.done}
                        onChange={() =>toggleTask(task)} />
                </td>
            </tr>

        </>
    )
}
