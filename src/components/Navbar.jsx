import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-zinc-900 shadow">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-white">Mi Portfolio</h1>
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}