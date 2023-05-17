import { useLocation  } from 'react-router-dom';
import css from './detailTask.module.css';

function DetailTask(props) {
    const { pathname } = useLocation()
    //console.log(pathname)
    //const { taskId } = pathname
    const { tasks } = props

    const task = tasks.find(task => task.id === pathname)

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <p className={css.title}>{task.title}</p>
                
            </div>
            

        </div>
    )
}

export default DetailTask;