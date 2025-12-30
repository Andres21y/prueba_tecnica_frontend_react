import styles from '../styles/sidebar.module.css'
import { MdHome, MdOutlineGroups2, MdContentCopy, MdOutlineCategory, MdInsights, MdOutlineStorefront } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa';
import { PiMedal } from 'react-icons/pi';
import { RxExit } from 'react-icons/rx';
import fondo from '../assets/fondo2.svg'

export const SideBar = () => {

    const links = [
        { icon: <MdHome />, label: 'Home', href: "/" },
        { icon: <MdInsights />, label: 'Impacto Social', href: "/" },
        { icon: <MdOutlineGroups2 />, label: 'Comunidad', href: "#" },
        { icon: <FaDollarSign />, label: 'Sponsors', href: "#" },
        { icon: <MdOutlineStorefront />, label: 'Marketplace', href: "#" },
        { icon: <PiMedal />, label: 'Bakanes', href: "#" },
        { icon: <MdContentCopy />, label: 'Contenidos', href: "#" },
        { icon: <MdOutlineCategory />, label: 'Categoria de acciones', href: "#" }
    ]

    return (
        <aside className={styles.container}>

            <div>
                <img src={fondo} alt="fondo" />       
            </div>

            <ul>
                {
                    links.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className={styles.link}>
                                <span className={styles.icon}>{item.icon}</span>
                                <span className={styles.label}>{item.label}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>

            <button className={styles.buton_sidebar}>
                <RxExit />
                <span className={styles.close}>Cerrar sesión</span>
            </button>

        </aside>
    )
}


