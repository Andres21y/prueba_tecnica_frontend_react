import { Header } from "../components/Header";
import styles from '../styles/dashboard.module.css'
import { SideBar } from "../components/SideBar";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { icon, clear, edit, update, svg, filter } from '../assets'



export const Dasboard = () => {

  const [title, setTitle] = useState('Categorias');

  const handleTitle = (value: string) => {
    setTitle(value)
  }

  const data = [
    { id: 1, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 2, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 3, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 4, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 5, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 6, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 7, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 8, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
    { id: 9, name: 'Foto + Description', icon: icon, state: 'Activo', description: 'Realizar actividad física al menos 30 minutos cada dia', date: 'Abr 3, 2024' },
  ]
  return (
    <div className={styles.main}>

      <div className={styles.container}>

        <Header />

        <div className={styles.content}>

          <SideBar />

          <div className={styles.container_content}>
            <div className={styles.title}>
              <span>{title}</span>
            </div>

            <div className={styles.tapbar}>

              <button
                className={title === 'Categorias' ? styles.active : ''}
                onClick={() => handleTitle('Categorias')}
              >
                Categorias
              </button>

              <button
                className={title === 'Tipos' ? styles.active : ''}
                onClick={() => handleTitle('Tipos')}>
                Tipos
              </button>

              <button
                className={title === 'Evidencias' ? styles.active : ''}
                onClick={() => handleTitle('Evidencias')}
              >
                Evidencias
              </button>
            </div>

            <div className={styles.stats}>
              <div className={styles.action}>
                <SearchBar />
                <div className={styles.filter}>
                  <img src={filter} alt="filterIcon" />
                  <span>Filtros</span>
                </div>
                <button className={styles.btnModal}>Crear tipo de categoria</button>
              </div>
              <div className={styles.table}>
                <table>
                  <thead>
                    <tr>
                      <th className={styles.tCategory}>
                        <span>Nombre de la categoria</span>
                        <img src={svg} alt="arrows" />
                      </th>
                      <th className={styles.tIcon}>
                        <span>Icono de la categoria</span>
                        <img src={svg} alt="arrows" />
                      </th>
                      <th className={styles.tState}>
                        <span>Estado</span>
                        <img src={svg} alt="arrows" />
                      </th>
                      <th className={styles.tDescription}>
                        <span>Descripción</span>
                        <img src={svg} alt="arrows" />
                      </th>
                      <th className={styles.tDate}>
                        <span>Fechas de Creación</span>
                        <img src={svg} alt="arrows" />
                      </th>
                      <th className={styles.tActions}>Aciones
                        <img src={svg} alt="arrows" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item: any) => (
                        <tr key={item.id}>
                          <td style={{ "textAlign": "left" }}>{item.name}</td>
                          <td><img src={item.icon} alt="icon" /></td>
                          <td className={styles.tbn_td}><button>{item.state}</button></td>
                          <td style={{ "textAlign": "left" }}>{item.description}</td>
                          <td>{item.date}</td>
                          <td className={styles.actions} >
                            <img src={edit} alt="editIcon" />
                            <img src={clear} alt="clearIcon" />
                            <img src={update} alt="updateIcon" />
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}