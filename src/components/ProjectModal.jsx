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
            className="relative bg-zinc-900 rounded-2xl p-6 w-full max-w-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // para evitar que se cierre al click en contenido
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4"
            />
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-800 text-blue-600 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
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
