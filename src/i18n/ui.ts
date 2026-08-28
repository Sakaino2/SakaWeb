import type { Locale } from "./index";

export const es = {
  "nav.home": "Inicio",
  "nav.development": "Desarrollo",
  "nav.design": "Diseño",
  "nav.contact": "Contacto",
  "skipToContent": "Saltar al contenido",
  "mobileNav.toggle": "Abrir menú de navegación",
  "footer.rights": "Todos los Derechos Reservados.",
  "copyright.name": "Jorge Sakaino",

  "hero.title": "Desarrollador & Diseñador",
  "hero.subtitle":
    "Desarrollador de Videojuegos - Desarrollador Fullstack - Diseñador Gráfico",
  "hero.cta.development": "Proyectos de Desarrollo",
  "hero.cta.design": "Proyectos de Diseño",

  "home.title": "Sakaweb — Desarrollador & Diseñador",
  "home.description":
    "Portafolio de Jorge Sakaino: desarrollo web y móvil, diseño gráfico, videojuegos. Conoce mis proyectos de desarrollo y diseño.",

  "about.title": "Sobre mi",
  "about.alt": "Fotografía profesional de Jorge Sakaino",
  "about.bio":
    "Soy un apasionado desarrollador full-stack web y mobile y busco crear experiencias digitales intuitivas. Mi carrera en la tecnología está complementada por una base sólida en mi experiencia de diseño gráfico. Lo que me permite crear un puente entre la funcionalidad y lo estético. Siempre busco la mejor manera de crear soluciones y siempre estoy dispuesto a aprender nuevas tecnologías para resolver problemas de una manera innovadora.",
  "about.downloadCv": "Descargar CV",

  "skills.dev.section": "Lenguajes / Herramientas",
  "skills.design.section": "Programas / Herramientas",
  "skills.tab.dev": "Desarrollo",
  "skills.tab.design": "Diseño",

  "contact.metaTitle": "Contacto — Sakaweb",
  "contact.metaDescription":
    "Contáctame para nuevas oportunidades y colaboraciones. Jorge Sakaino, desarrollador y diseñador gráfico.",
  "contact.title": "Contáctame",
  "contact.message":
    "Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡Siéntete libre de mandarme un mensaje para discutir alguno de tus proyectos!",
  "contact.formTitle": "Enviar mensaje",

  "form.name": "Nombre",
  "form.namePlaceholder": "Nombre...",
  "form.email": "Correo",
  "form.emailPlaceholder": "nombre@correo.com",
  "form.message": "Mensaje",
  "form.messagePlaceholder": "Escribe tu mensaje...",
  "form.submit": "Enviar",
  "form.submitting": "Enviando...",
  "form.successTitle": "¡Mensaje enviado!",
  "form.successBody":
    "Gracias por contactarme. Te responderé lo antes posible.",
  "form.sendAnother": "Enviar otro mensaje",
  "form.error":
    "Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo o escríbeme por LinkedIn.",

  "backButton": "Volver",
  "projectCard.view": "Ver Proyecto",

  "design.metaTitle": "Proyectos de Diseño — Sakaweb",
  "design.metaDescription":
    "Explora mis proyectos de diseño gráfico: branding, fotografía, edición de video y redes sociales.",
  "design.sectionTitle": "Proyectos de Diseño",

  "development.metaTitle": "Proyectos de Desarrollo — Sakaweb",
  "development.metaDescription":
    "Explora mis proyectos de desarrollo de software: aplicaciones web, móviles y backend.",
  "development.sectionTitle": "Proyectos de Desarrollo",

  "notFound.metaTitle": "Página no encontrada — Sakaweb",
  "notFound.metaDescription": "La página que buscas no existe.",
  "notFound.body": "La página que buscas no existe.",
  "notFound.home": "Volver al inicio",

  "theme.toLight": "Cambiar a modo claro",
  "theme.toDark": "Cambiar a modo oscuro",
  "theme.sr": "Alternar modo oscuro",

  "media.videoPreview": "Vista previa del video",
  "media.projectImage": "Imagen del proyecto",
  "media.media": "Imagen",

  "seo.siteDescription":
    "Jorge Sakaino — Portfolio de desarrollo web/móvil y diseño gráfico. Proyectos de software y diseño, experiencias de usuario y más.",
  "seo.jobTitle": "Desarrollador y Diseñador Gráfico",
} as const;

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
  "nav.home": "Home",
  "nav.development": "Development",
  "nav.design": "Design",
  "nav.contact": "Contact",
  "skipToContent": "Skip to content",
  "mobileNav.toggle": "Open navigation menu",
  "footer.rights": "All Rights Reserved.",
  "copyright.name": "Jorge Sakaino",

  "hero.title": "Developer & Designer",
  "hero.subtitle":
    "Game Developer - Fullstack Developer - Graphic Designer",
  "hero.cta.development": "Development Projects",
  "hero.cta.design": "Design Projects",

  "home.title": "Sakaweb — Developer & Designer",
  "home.description":
    "Jorge Sakaino's portfolio: web and mobile development, graphic design, video games. Discover my development and design projects.",

  "about.title": "About Me",
  "about.alt": "Professional headshot of Jorge Sakaino",
  "about.bio":
    "I am a passionate full-stack web and mobile developer seeking to create intuitive digital experiences. My career in technology is complemented by a solid foundation in my graphic design experience, allowing me to bridge functionality and aesthetics. I always look for the best way to create solutions and I am always willing to learn new technologies to solve problems in an innovative way.",
  "about.downloadCv": "Download CV",

  "skills.dev.section": "Languages / Tools",
  "skills.design.section": "Programs / Tools",
  "skills.tab.dev": "Development",
  "skills.tab.design": "Design",

  "contact.metaTitle": "Contact — Sakaweb",
  "contact.metaDescription":
    "Contact me for new opportunities and collaborations. Jorge Sakaino, developer and graphic designer.",
  "contact.title": "Contact Me",
  "contact.message":
    "I am always open to new opportunities and collaborations. Feel free to send me a message to discuss any of your projects!",
  "contact.formTitle": "Send a message",

  "form.name": "Name",
  "form.namePlaceholder": "Name...",
  "form.email": "Email",
  "form.emailPlaceholder": "name@email.com",
  "form.message": "Message",
  "form.messagePlaceholder": "Write your message...",
  "form.submit": "Send",
  "form.submitting": "Sending...",
  "form.successTitle": "Message sent!",
  "form.successBody":
    "Thank you for contacting me. I will get back to you as soon as possible.",
  "form.sendAnother": "Send another message",
  "form.error":
    "There was an error sending your message. Please try again or reach out to me on LinkedIn.",

  "backButton": "Back",
  "projectCard.view": "View Project",

  "design.metaTitle": "Design Projects — Sakaweb",
  "design.metaDescription":
    "Explore my graphic design projects: branding, photography, video editing and social media.",
  "design.sectionTitle": "Design Projects",

  "development.metaTitle": "Development Projects — Sakaweb",
  "development.metaDescription":
    "Explore my software development projects: web, mobile and backend applications.",
  "development.sectionTitle": "Development Projects",

  "notFound.metaTitle": "Page not found — Sakaweb",
  "notFound.metaDescription": "The page you are looking for does not exist.",
  "notFound.body": "The page you are looking for does not exist.",
  "notFound.home": "Back to home",

  "theme.toLight": "Switch to light mode",
  "theme.toDark": "Switch to dark mode",
  "theme.sr": "Toggle dark mode",

  "media.videoPreview": "Video preview",
  "media.projectImage": "Project image",
  "media.media": "Image",

  "seo.siteDescription":
    "Jorge Sakaino — Web/mobile development and graphic design portfolio. Software and design projects, user experiences and more.",
  "seo.jobTitle": "Developer and Graphic Designer",
};

export const ui: Record<Locale, Record<UIKey, string>> = { es, en };

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
