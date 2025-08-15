import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-glass-dark flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-zinc-900 rounded-2xl p-6 w-full max-w-[80%] max-h-[90%] shadow-lg flex gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // para evitar que se cierre al click en contenido
          >
            <div className='max-w-[350px] min-w-[30%]'>
              <img className="rounded mb-4"
                src={project.image} alt={project.title}
              />
              <p className="mt-2 text-sm text-gray-700">{project.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-slate-800 text-blue-600 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className='flex gap-2'>
                { project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-zinc-700 text-white hover:bg-slate-800 hover:text-blue-600 px-2 py-1 rounded transition">
                    🔗 Muestra Online
                  </a>
                )}
                { project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-zinc-700 text-white hover:bg-slate-800 hover:text-blue-600 px-2 py-1 rounded transition">
                    🔗 Github
                  </a>
                )}
              </div>
              <p className='whitespace-pre-line text-gray-500  overflow-auto'>{project.fullDescription}</p>
            </div>
              <button
                onClick={onClose}
                className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 bg-zinc-600 hover:bg-red-600 
                text-white w-12 h-12 rounded-full shadow-lg flex items-end justify-center text-6xl scale-75"
              >
                &times;
              </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
