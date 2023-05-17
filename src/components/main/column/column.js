import css from './column.module.css';
//import Scrollbars from "react-custom-scrollbars-2";
import { Link } from 'react-router-dom';
import {LIST_TYPES, LIST_COPY} from '../../../config';
import { useState } from 'react';
import FormAddNewTask from '../../forms/formAddNewTask';


function Column(props) {
    const { type, title, tasks, addNewTask } = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

    const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

    return (
       
            <div className={css.column}>
                <h3 className={css.header}>{title}</h3>
                {tasks.map(task => {
                    return (
                        <Link to={`/tasks/${task.id}`} className={css.taskLink}>
                            <div key={task.id} className={css.card}>{task.title}</div>
                        </Link>
                    )
                })}

                {type === LIST_TYPES.BACKLOG && isFormVisible && (
                    <FormAddNewTask formSubmit={formSubmit} />
                )}

                <button className={css.button} onClick={handleAddNewClick}>+ Add card</button>

            </div>    
        
        
        
    )
}

export default Column;