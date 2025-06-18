import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-glass-dark shadow border-b-[1px] border-[#6f484845]">
      <nav className="container mx-auto flex items-center justify-between p-4 text-gray-500">
        <h1 className="text-xl font-bold ">
          &lt;
          <span className='text-white'>GS-DEV</span>
          /&gt;
        </h1>
        <ul className="flex space-x-4 font-medium">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}