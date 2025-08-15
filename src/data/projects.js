export const projects = [
  {
    id: 'pasapalabra',
    title: 'Pasapalabra',
    image: 'https://i.imgur.com/7nfCJ1g.png',
    shortDescription: 'Juego en el que debes adivinar las palabras del rosco con tu conocimiento.',
    fullDescription: 
      `Una sofisticada aplicación de juego de palabras basada en React que muestra las prácticas modernas de desarrollo web y técnicas avanzadas de gestión de estados. Creada con React 19 y Vite 7, el proyecto aprovecha las últimas características de las capacidades de renderizado simultáneo de React e implementa el cumplimiento del modo estricto para una gestión robusta del ciclo de vida de los componentes. La aplicación demuestra una compleja orquestación de estados a través de la API Context de React, gestionando los estados del juego a través de múltiples componentes mientras mantiene límites de componentes limpios y un aislamiento de estados adecuado.

La arquitectura de esta aplicación emplea varias características técnicas destacadas:

- Un componente de interfaz de usuario circular que posiciona dinámicamente 27 nodos de letras utilizando rotaciones y contrarrotaciones CSS programáticas, creando un tablero de juego atractivo y fiel al juego original.
- Gestión del estado del juego en tiempo real con re-renderización optimizada utilizando los hooks useEffect y useRef para manejar los temporizadores y la progresión del juego.
- Soporte multijugador con una sofisticada lógica por turnos y sincronización de estados.
- Estructuras de datos eficientes para gestionar el banco de preguntas del juego y el progreso de los jugadores.
- Diseño implementado a través de Tailwind CSS, con degradados personalizados y estilos dinámicos.
- Herramientas de desarrollo modernas, incluyendo ESLint con plugins específicos para React y SWC (Speedy Web Compiler) para mejorar el rendimiento de la compilación.
- El proyecto ejemplifica prácticas de código limpio con una estructura de componentes bien organizada, separación de preocupaciones y patrones de gestión de estado adecuados. El código base demuestra dominio de las últimas características de React, JavaScript moderno y prácticas de desarrollo front-end contemporáneas.`,
    link: 'https://pasapalabra-wheat.vercel.app/',
    github: 'https://github.com/GermanSilva/pasapalabra',
    tags: ['Game', 'SPA', 'Vite', 'React', 'TailwindCSS'],
  },
  {
    id: 'simon-dice',
    title: 'Simón Dice',
    image: 'https://placehold.co/600x400/242424/31343C',
    shortDescription: '[En desarrollo] Juego de memoria interactivo.',
    fullDescription: 'Juego de memoria interactivo hecho en Flutter.',
    link: '',
    github: '',
    tags: ['Flutter', 'Mobile', 'Game'],
  },
  {
    id: 'bot-discord',
    title: 'Bot de Discord',
    image: 'https://placehold.co/600x400/242424/31343C',
    shortDescription: 'Bot de coleccionismo e intercambio hecho en NodeJS.',
    fullDescription: 'Bot de coleccionismo e intercambio hecho en NodeJS.',
    link: '',
    github: '',
    tags: ['NodeJS', 'MongoDB', 'DiscordJS'],
  },
  // Más proyectos...
]