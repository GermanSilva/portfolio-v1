import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0},
  animate: { opacity: 1},
  exit: { opacity: 0}
}

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}