import { Routes, Route, NavLink } from 'react-router-dom'
import ListaTareas from './pages/ListaTareas'
import AgregarTarea from './pages/AgregarTarea'
import './App.css'

function App() {
  return (
    <div className="app-contenedor">
      {}
      <nav className="navbar">
        <span className="navbar-logo">MisTareas</span>
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link activo' : 'nav-link'}
          >
            Lista
          </NavLink>
          <NavLink
            to="/agregar"
            className={({ isActive }) => isActive ? 'nav-link activo' : 'nav-link'}
          >
            + Agregar
          </NavLink>
        </div>
      </nav>

      {}
      <main className="main-contenido">
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/agregar" element={<AgregarTarea />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
