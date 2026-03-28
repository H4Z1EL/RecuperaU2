import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Boton from '../components/Boton'
import './AgregarTarea.css'

function AgregarTarea() {
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [errorMensaje, setErrorMensaje] = useState('')
  const [exito, setExito] = useState(false)

  const navegar = useNavigate()

  const validarTexto = (texto) => {
    const textoLimpio = texto.trim()

    if (textoLimpio.length === 0) {
      return 'La tarea no puede estar vacía ni tener solo espacios.'
    }

    const tieneLetra = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(textoLimpio)
    if (!tieneLetra) {
      return 'La tarea debe contener al menos una letra.'
    }

    const soloAlfanumerico = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/.test(textoLimpio)
    if (!soloAlfanumerico) {
      return 'Solo se permiten letras, números y espacios.'
    }

    return ''
  }

  const handleChange = (e) => {
    setNuevaTarea(e.target.value)
    if (errorMensaje) {
      setErrorMensaje('')
    }
  }

  const handleAgregar = () => {
    const error = validarTexto(nuevaTarea)

    if (error) {
      setErrorMensaje(error)
      return
    }

    const tarea = {
      id: Date.now(), 
      texto: nuevaTarea.trim(), 
      completada: false,
    }

    const tareasGuardadas = localStorage.getItem('tareas')
    const tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

    const tareasActualizadas = [...tareas, tarea]

    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas))

    setNuevaTarea('')
    setErrorMensaje('')
    setExito(true)

    setTimeout(() => {
      navegar('/')
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAgregar()
    }
  }

  return (
    <div className="agregar-contenedor">
      <h1 className="agregar-titulo">Nueva Tarea</h1>

      {}
      {exito ? (
        <div className="agregar-exito">
          <span className="exito-icono"></span>
          <p>¡Tarea guardada correctamente! Redirigiendo...</p>
        </div>
      ) : (
        <div className="agregar-formulario">
          <label className="agregar-label" htmlFor="input-tarea">
            ¿Qué necesitas hacer?
          </label>

          {}
          <div onKeyDown={handleKeyDown}>
            <Input
              valor={nuevaTarea}
              onChange={handleChange}
              placeholder="Ej: Estudiar para el examen"
              error={errorMensaje}
            />
          </div>

          <div className="agregar-botones">
            {}
            <Boton
              texto="Agregar Tarea"
              onClick={handleAgregar}
              variante="primario"
            />
            <Boton
              texto="Cancelar"
              onClick={() => navegar('/')}
              variante="secundario"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AgregarTarea
