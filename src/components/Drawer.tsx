import styles from '../styles/modal.module.css'
export const Drawer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_inputs}>
                    <span className={styles.title}>Crear categoria</span>
                    <div className={styles.bdCuerpo}>
                        <div className={styles.content_input}>
                            <label htmlFor="">Nombre de la categoria*</label>
                            <input type="text" placeholder='Escribe el nombre de la buena acción' />
                        </div>
                        <div className={styles.content_textarea}>
                            <label htmlFor=""> Descripción de la buena acción*</label>
                            <textarea name="" id="" placeholder='Agregar descripción'></textarea>
                        </div>
                        <div>
                            <label htmlFor=""> Logo*</label>
                            <input type="file" placeholder='Carga archivo' />
                        </div>
                        <div>
                            <label htmlFor="">Color*</label>
                            <input type="text" placeholder='Registra color código HEX' />
                        </div>
                        <div>
                            <label htmlFor="">Toggle*</label>
                            <input type="text" />
                        </div>
                    </div>

                </div>
                <div className={styles.content_buttons}>
                    <div className={styles.buttons}>
                        <button>Cancelar</button>
                        <button disabled={true} >Crear</button>
                    </div>
                </div>

            </div>
        </div>
    )
}