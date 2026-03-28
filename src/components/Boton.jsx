import './Boton.css'

function Boton({ texto, onClick, variante = 'primario', deshabilitado = false }) {
  return (
    <button
      className={`boton boton-${variante}`}
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto}
    </button>
  )
}

export default Boton
