import './Input.css'

function Input({ valor, onChange, placeholder = 'Escribe aquí...', error = '' }) {
  return (
    <div className="input-grupo">
      <input
        className={`input-campo ${error ? 'input-error' : ''}`}
        type="text"
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
      />
      {}
      {error && <p className="input-mensaje-error">{error}</p>}
    </div>
  )
}

export default Input
