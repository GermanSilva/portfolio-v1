export default function Home() {
  return (
    <>
      <section className="mt-12">
        <h2 className="text-3xl">¡Hola! soy</h2>
        <div className="text-[4em] sm:text-[5em] md:text-[7em] lg:text-[9em] -mt-6 text-glass bg-white font-semibold leading-none tracking-tighter">GERMÁN SILVA</div>
        <p className="text-gray-400">
          Desarrollador Frontend con experiencia en React, Flutter y diseño web.
        </p>
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