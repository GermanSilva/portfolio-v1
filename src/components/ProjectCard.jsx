import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/proyectos/${project.id}`}
      className="bg-zinc-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>
      </div>
    </Link>
  )
}
