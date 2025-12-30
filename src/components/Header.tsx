import styles from '../styles/header.module.css'
import user from '../assets/user.svg'
import whiteLogo from '../assets/whiteLogo.svg'

export const Header = () => {
    return (
        <div className={styles.container}>
            <img src={whiteLogo} alt="whiteIcon" />
            <img src={user} alt="userIcon" />
        </div>
    )
}