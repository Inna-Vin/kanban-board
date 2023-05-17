import css from './user.module.css'
import userAvatar from './user-avatar.png'
import arrow from './Vector.svg'

function User() {
    return (
        <div className={css.user}>
        <img src={userAvatar} className={css.imgAvatar} />
        <button className={css.buttonArrow}> <img src={arrow} /> </button>
        </div>
    )
}

export default User;