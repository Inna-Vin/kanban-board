import { useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './detailTask.module.css';

function DetailTask(props) {
    const { pathname } = useLocation()
    const { tasks } = props
    const task = tasks.find(task => `/tasks/${task.id}` === pathname)

    const [values, setValues] = useState({
       description: task.description
    })

    const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}
   

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <p className={css.title}>{task.title}</p>
                <Link to='/' className={css.btnClose}>&#10006;</Link>
            </div>

            <textarea className={css.description} name='description'  type='text' value={values.description} onChange={handleChange} placeholder='This task has no description'/>
            <button className={css.save}>save</button>
        </div>
    )
}

export default DetailTask;