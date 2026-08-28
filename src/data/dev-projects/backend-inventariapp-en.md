---
title: "Backend - InventariApp"
description: "REST application for the annual inventory registration for public institutions"
lang: "en"
technologies: ["Golang", "PostgreSQL"]
thumbnail: "/projects/dev/backend-inventariapp/login.webp"
media:
  - "/projects/dev/backend-inventariapp/login.webp"
  - "/projects/dev/backend-inventariapp/get-folios.webp"
  - "/projects/dev/backend-inventariapp/get-items.webp"
  - "/projects/dev/backend-inventariapp/pdf-generation.webp"
date: 2025-08-21
show: true
---

## Project Summary

Project developed for the Municipality of Lima and INPE that consisted of creating a custom Go-based API in charge of carrying out the annual inventory, resulting in an API that can be improved over time.

### Features

- User authentication.
- CRUD operations (Create, Read, Update, Delete).
- PDF document generation.
- Storage of collected data in a PostgreSQL database.
- Image storage in S3 Storage.
- Report generation in DOCX, CSV and XLSX formats.
- Application deployment on a VPS.

### Project Process

It started with the design of the user experience and the database to fit the project's needs.

### Learnings

Implementing the image storage functionality using Minio as an S3-based server on the VPS.
