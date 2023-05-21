import css from './select.module.css';
import { LIST_TYPES } from '../../config';
import { useState } from 'react';


function Select(props) {
    const { noFiltredTasks, type, setTasks } = props

    // const [newStatus, setNewStatus] = useState(undefined)

     const handleChange = (e) => {
        const tasksId = e.target.value
    //     const newStatus = e.target.name
    //     const findTask = noFiltredTasks.find(task => task.id === tasksId)
        
    //     setNewStatus({...findTask, status: newStatus})

	// 	setTasks(updatedTasks)
    }
   
    return (
        <select className={css.select} onChange={handleChange} value={noFiltredTasks.status}>
        
            {type === LIST_TYPES.READY && (
                noFiltredTasks.filter(task => task.status === 'backlog').map(tasks => {
                    return (
                        <option key={tasks} name='ready' value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === LIST_TYPES.IN_PROGRESS && (
                noFiltredTasks.filter(task => task.status === 'ready').map(tasks => {
                    return (
                        <option key={tasks} name='inProgress' value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === LIST_TYPES.FINISHED && (
                noFiltredTasks.filter(task => task.status === 'inProgress').map(tasks => {
                    return (
                        <option key={tasks} name='finished' value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }
        
        </select>

    )
    

    // {Object.values(LIST_TYPES).map(list => {
    //     return <option key={list} value={list}>{LIST_COPY[list]}</option>
    // })}
}


export default Select;