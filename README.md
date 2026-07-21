# Budget Planner

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Context API](https://img.shields.io/badge/React_Context_API-61DAFB?logo=react&logoColor=white)

Aplicación web desarrollada con **React y TypeScript** para planificar y controlar gastos personales. Permite establecer un presupuesto inicial, registrar gastos y visualizar el dinero disponible mediante una interfaz interactiva y responsive.

---

# Demo

**Aplicación**

> Próximamente

---

# Capturas

> Próximamente

<!--
![Dashboard](docs/dashboard.png)

![Gastos](docs/expenses.png)

![Formulario](docs/form.png)

![Mobile](docs/mobile.png)
-->

---

# Características

## Gestión del presupuesto

- Definición de presupuesto inicial.
- Seguimiento del dinero disponible.
- Cálculo automático de gastos realizados.
- Visualización del progreso mediante gráficos.

## Gestión de gastos

- Crear nuevos gastos.
- Editar gastos existentes.
- Eliminar gastos.
- Organización por categorías.
- Selección de fechas.

## Interacciones

- Acciones mediante gestos de desplazamiento.
- Deslizar hacia la derecha para editar gastos.
- Deslizar hacia la izquierda para eliminar gastos.
- Experiencia optimizada para dispositivos móviles.

## Interfaz

- Diseño responsive.
- Componentes reutilizables.
- Animaciones e interacciones fluidas.
- Indicadores visuales del presupuesto.

---

# Tecnologías

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Context API
- React Swipeable List
- React Circular Progressbar
- React Calendar
- React Date Picker
- Headless UI
- Heroicons

---

# Arquitectura

```text
              Usuario
                  │
                  ▼
        React + TypeScript + Vite
                  │
                  ▼
          Context API (Estado global)
                  │
                  ▼
        Componentes + Formularios
                  │
                  ▼
          Gestión de presupuesto
          y gastos personales
```

---

# Estructura del proyecto

```text
budget-planner
│
├── src
│   ├── components
│   ├── context
│   ├── hooks
│   ├── types
│   ├── utils
│   └── main.tsx
│
├── public
├── package.json
├── vite.config.ts
└── README.md
```

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/SantiJosue/budget-planner.git
```

Entrar al proyecto:

```bash
cd budget-planner
```

Instalar dependencias:

```bash
npm install
```

Ejecutar:

```bash
npm run dev
```

---

# Scripts disponibles

```bash
npm run dev
```

Inicia la aplicación en modo desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run lint
```

Ejecuta ESLint.

```bash
npm run preview
```

Previsualiza la aplicación compilada.

---

# Estado del proyecto

Proyecto finalizado desarrollado como práctica de React moderno.

Fue realizado para practicar:

- Manejo de estado global con Context API.
- Tipado con TypeScript.
- Interfaces interactivas.
- Gestión de formularios.
- Experiencia de usuario mediante gestos.

---

# Autor

**Santiago Fernández**

Desarrollador Frontend con conocimientos en desarrollo Full Stack utilizando React, TypeScript, Node.js, Express y MongoDB.

GitHub:
https://github.com/SantiJosue

---

# Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.
