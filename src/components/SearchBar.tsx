import { IoIosSearch } from 'react-icons/io'
import styles from '../styles/search.module.css'

export const SearchBar = () => {
    return (
        <div className={styles.container}>
            <IoIosSearch/>
            <input type="text"
            placeholder='Buscar' 
            className={styles.search}/>
        </div>
    )
}