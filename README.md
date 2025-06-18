# 🌐 Portfolio Personal - German Silva

Este proyecto es un portfolio web personal desarrollado con React, TailwindCSS y Framer Motion, diseñado para mostrar información profesional, proyectos destacados y permitir contacto directo a través de un formulario funcional.


## 🚀 Tecnologías utilizadas

- **React** + Vite
- **React Router v7** – Navegación de rutas
- **TailwindCSS** – Estilos responsivos y utilitarios
- **Framer Motion** – Animaciones fluidas de componentes y transiciones
- **EmailJS** – Envío de correos desde el formulario de contacto
- **Google reCAPTCHA v2 invisible** – Protección contra spam


## 📁 Estructura

```
src/
├ assets/       # Imágenes y recursos estáticos
├ components/   # Componentes reutilizables (Navbar, Footer, etc.)
├ data/         # Información utilizada en componentes y paginas (Projects)
├ pages/        # Páginas principales (Home, Projects, Contact)
└ styles/       # Archivos de estilos CSS
App.jsx         # Componente raíz con rutas
main.jsx        # Entrada de React
```


## 🧪 ¿Cómo ejecutar localmente?

1. Clonar el repositorio:

```bash
git clone git@github.com:TuUsuario/portfolio-v1.git
cd portfolio-v1
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
```


## 📬 Formulario de contacto

El formulario incluye:
- Validación de campos con feedback visual
- Envío automático vía EmailJS
- Protección con Google reCAPTCHA v2 (invisible)
- Mensajes animados de éxito o error


## 🔒 Variables de entorno

Crear un archivo `.env` en la raíz con:
```
VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx
VITE_RECAPTCHA_SITE_KEY=xxxx
```


## ✅ Estado actual

- [x] Estructura base con navegación
- [x] Estilos responsivos con Tailwind
- [x] Transiciones entre rutas
- [x] Formulario funcional
- [ ] Agregar sección de proyectos dinámicos
- [ ] Optimización para SEO y despliegue


## ✨ Demo (próximamente)

[Enlace al sitio desplegado](https://...)