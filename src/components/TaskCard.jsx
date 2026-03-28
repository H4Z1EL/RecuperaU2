import Boton from './Boton'
import './TaskCard.css'

function TaskCard({ tarea, onCompletar, onEliminar }) {
  return (
    <div className={`task-card ${tarea.completada ? 'task-card-completada' : ''}`}>
      <div className="task-card-info">
        {}
        <p className={`task-card-texto ${tarea.completada ? 'texto-tachado' : ''}`}>
          {tarea.texto}
        </p>
        <span className={`task-card-estado ${tarea.completada ? 'estado-completada' : 'estado-pendiente'}`}>
          {tarea.completada ? ' Completada' : ' Pendiente'}
        </span>
      </div>

      <div className="task-card-acciones">
        {}
        {!tarea.completada && (
          <Boton
            texto="Completar"
            onClick={() => onCompletar(tarea.id)}
            variante="exito"
          />
        )}
        <Boton
          texto="Eliminar"
          onClick={() => onEliminar(tarea.id)}
          variante="peligro"
        />
      </div>
    </div>
  )
}

export default TaskCard
