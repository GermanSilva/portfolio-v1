import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill, RiTailwindCssFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

export default function Home() {
  const techStack = [
    { name: "React", icon: FaReact, hoverColor: "group-hover:text-sky-500" },
    { name: "Flutter", icon: FaFlutter, hoverColor: "group-hover:text-blue-400" },
    { name: "TailwindCSS", icon: RiTailwindCssFill, hoverColor: "group-hover:text-cyan-400" },
    { name: "JavaScript", icon: IoLogoJavascript, hoverColor: "group-hover:text-yellow-500"},
    { name: "HTML", icon: FaHtml5, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, hoverColor: "group-hover:text-blue-500" },
    { name: "Firebase", icon: RiFirebaseFill, hoverColor: "group-hover:text-amber-400" },
  ];

  return (
    <>
      <section className="mt-12">
        <h2 className="text-3xl -mb-1">¡Hola! soy</h2>
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(40px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-[4em] sm:text-[5em] md:text-[7em] lg:text-[9em] text-glass bg-gray-400 font-semibold leading-none tracking-tighter"
        >
          GERMÁN SILVA
        </motion.div>
        <p className="text-gray-400 uppercase">
          Desarrollador Frontend con experiencia en
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {techStack.map(({ name, icon: Icon, hoverColor }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(40px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              key={name}
            >
              <span
                className="group px-3 py-1 text-sm rounded-full bg-glass-light bg-glass-border text-zinc-500 shadow-sm transition transform flex items-center gap-1 
                  hover:scale-105"
              >
                <Icon size={16} className={`transition-colors ${hoverColor}`} />
                <span className="transition-colors group-hover:font-semibold group-hover:text-white">
                  {name}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-24">
        <div className="max-w-3xl text-gray-300 space-y-6">
          <h2 className="text-3xl mb-6 text-gray-800 dark:text-white flex gap-2">
            <span className="text-glass bg-white font-semibold">&lt;</span>
            Sobre mí
            <span className="text-glass bg-white font-semibold">/&gt;</span>
          </h2>

          <p>
            Soy desarrollador frontend con experiencia en diseño de interfaces,
            desarrollo web y apps móviles. Disfruto transformar ideas en
            productos funcionales y atractivos. Me siento cómodo trabajando
            tanto con tecnologías como React, Tailwind y Flutter, como también
            en resolver lógicas complejas o integraciones backend simples.
          </p>

          <p>
            Además de programar, me interesa aprender constantemente y trabajar
            en equipo. Estoy buscando oportunidades para crecer profesionalmente
            y aportar a proyectos con impacto real.
          </p>

          <p>
            Actualmente estoy desarrollando este portfolio y un juego tipo
            “Simón dice” para móviles con Flutter, integrando monetización.
          </p>
        </div>
      </section>
    </>
  );
}