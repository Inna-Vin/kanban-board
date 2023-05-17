import css from './footer.module.css'

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.tasks}>
                <p>Active tasks: </p>
                <p>Finished tasks: </p>
            </div>
            <div className={css.nameUser}>
                <p>Kanban board by , </p>
            </div>
        </footer>
    )
}

export default Footer;