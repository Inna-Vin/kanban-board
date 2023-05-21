import css from './column.module.css';
//import Scrollbars from "react-custom-scrollbars-2";
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../../config';
import { useState } from 'react';
import clsx from 'clsx';
import FormAddNewTask from '../../forms/formAddNewTask';
import Select from '../../select/select';


function Column(props) {
    const { type, status, tasks, addNewTask } = props

    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setisSelectVisible] = useState(false)

    const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)

	}

    const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

    const handleSelectVisible = () => {
        setisSelectVisible(!isSelectVisible)
    }


    return (
       
            <div className={css.column}>
                <h3 className={css.header}>{status}</h3>
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
                
                {type === LIST_TYPES.BACKLOG &&
                    <button className={css.button} onClick={handleAddNewClick}>+ Add card</button>
                }

                <div className={css.selectCard}>
                    {type !== LIST_TYPES.BACKLOG && isSelectVisible && (
                        <Select {...props} />
                    )}

                    {type !== LIST_TYPES.BACKLOG && 
                        <button className={clsx(isSelectVisible ? css.addCard : '')} onClick={handleSelectVisible}>
                            {isSelectVisible ? 'Submit' : '+ Add card'}
                        </button>
                    }
                </div>

            </div>    
        
        
        
    )
}

export default Column;