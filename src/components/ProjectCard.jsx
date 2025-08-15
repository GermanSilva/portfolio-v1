import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-glass-dark bg-glass-border rounded-2xl shadow p-4 cursor-pointer h-full outline-none focus:outline-none"
    >
      <img src={project.image} alt={project.title} className="rounded mb-2" />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.shortDescription}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-800 text-blue-600 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
