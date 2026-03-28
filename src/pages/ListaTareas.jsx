import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskCard from '../components/TaskCard'
import Boton from '../components/Boton'
import './ListaTareas.css'

const cargarTareasIniciales = () => {
  const tareasGuardadas = localStorage.getItem('tareas')
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
}

function ListaTareas() {
  const [listaTareas, setListaTareas] = useState(cargarTareasIniciales)

  const navegar = useNavigate()

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(listaTareas))
  }, [listaTareas]) 

  const handleCompletar = (id) => {
    const tareasActualizadas = listaTareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: true }
      }
      return tarea
    })
    setListaTareas(tareasActualizadas)
  }

  const handleEliminar = (id) => {
    const tareasFiltradas = listaTareas.filter((tarea) => tarea.id !== id)
    setListaTareas(tareasFiltradas)
  }

  return (
    <div className="lista-contenedor">
      <div className="lista-encabezado">
        <h1 className="lista-titulo">Mis Tareas</h1>
        <Boton
          texto="+ Nueva tarea"
          onClick={() => navegar('/agregar')}
          variante="primario"
        />
      </div>

      {}
      {listaTareas.length === 0 ? (
        <div className="lista-vacia">
          <span className="lista-vacia-icono">🗒️</span>
          <p className="lista-vacia-mensaje">No hay tareas pendientes.</p>
          <p className="lista-vacia-sugerencia">¡Agrega una para empezar!</p>
        </div>
      ) : (
        <div className="lista-tareas">
          {}
          {listaTareas.map((tarea) => (
            <TaskCard
              key={tarea.id}
              tarea={tarea}
              onCompletar={handleCompletar}
              onEliminar={handleEliminar}
            />
          ))}
        </div>
      )}

      {}
      {listaTareas.length > 0 && (
        <p className="lista-resumen">
          Total: {listaTareas.length} tarea(s) —{' '}
          {listaTareas.filter((t) => t.completada).length} completada(s)
        </p>
      )}
    </div>
  )
}

export default ListaTareas
