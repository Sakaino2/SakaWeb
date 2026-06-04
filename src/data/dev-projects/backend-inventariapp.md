---
title: "Backend - InventariApp"
description: "Aplicación REST de registro de inventario anual para instituciones públicas"
technologies: ["Golang", "PostgreSQL"]
githubUrl: "https://github.com/your-username/my-awesome-app"
liveUrl: "https://my-awesome-app.vercel.app"
thumbnail: "/projects/dev/backend-inventariapp/login.webp"
media:
  - "/projects/dev/backend-inventariapp/login.webp"
  - "/projects/dev/backend-inventariapp/get-folios.webp"
  - "/projects/dev/backend-inventariapp/get-items.webp"
  - "/projects/dev/backend-inventariapp/pdf-generation.webp"
date: 2025-08-21
show: true
---

## Resumen del Proyecto

Proyecto trabajado para la Municipalidad de Lima y el INPE que consistía en la creación de una API a medida basada en Go encargada de realizar el inventario anual, generando así una API que tenga posibilidad de mejorarse en el tiempo.

### Características

- Autenticación de usuarios.
- Operaciones CRUD (Create, Read, Update, Delete).
- Generación de documentos en PDFs.
- Almacenamiento de datos recolectados en base de datos PostgreSQL.
- Almacenamiento de imágenes en un S3 Storage.
- Generación de reportes en formatos DOCX, CSV y XLSX.
- Implementación de aplicación en VPS.

### Proceso del Proyecto

Se empezó con el diseño de la experiencia de usuario y de la base de datos para ajustarse a las necesidades del proyecto.

### Aprendizajes

La implementación de la funcionalidad de almacenamiento de imágenes utilizando Minio como servidor en el VPS basado en S3.
