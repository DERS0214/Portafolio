


# README del Proyecto Curriculum

---

# 📄 Curriculum Portfolio - David Ramírez

## 🎯 Descripción del Proyecto

Este proyecto es una aplicación web de portafolio personal desarrollada con React y TypeScript [1](#0-0) . Se trata de una aplicación de una sola página (SPA) que presenta información profesional, habilidades técnicas, proyectos y detalles de contacto [2](#0-1) .

El portafolio está diseñado como una aplicación React moderna que sigue las mejores prácticas de desarrollo web, utilizando tecnologías de vanguardia para crear una experiencia de usuario fluida y profesional.

## 🚀 Tecnologías Utilizadas

### Stack Principal
- **React** ^18.3.1 - Framework de UI
- **TypeScript** ^5.5.3 - Tipado estático
- **Vite** ^7.0.3 - Herramienta de build y servidor de desarrollo
- **Tailwind CSS** ^3.4.11 - Framework CSS utility-first
- **React Router** ^6.26.2 - Enrutamiento del lado del cliente
- **React Query** ^5.56.2 - Gestión de estado y datos

### Componentes UI
- **Radix UI** - Primitivos de UI accesibles
- **Lucide React** - Iconos modulares
- **Shadcn/UI** - Sistema de componentes [3](#0-2) 

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/DERS0214/curriculum.git
   cd curriculum
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Visita `http://localhost:5173` para ver la aplicación. [4](#0-3) 

## 🎨 Secciones Principales

La aplicación está organizada en seis secciones principales que muestran diferentes aspectos del perfil profesional:

### 1. **Hero Section** 
- Presentación inicial con foto de perfil
- Animación de roles profesionales rotativa (Developer, Data Analytics Specialist, Ingeniero en Computación)
- Botones de llamada a la acción
- Enlaces a redes sociales [5](#0-4) 

### 2. **About Section**
- Descripción del perfil profesional
- Estadísticas académicas y profesionales (7º semestre, 5+ proyectos, 15+ tecnologías)
- Áreas de competencia destacadas (Desarrollo Web, Backend & APIs, Análisis de Datos)
- Estado de disponibilidad [6](#0-5) 

### 3. **Skills Section**
- Habilidades técnicas organizadas por categorías:
  - **Análisis de Datos**: Python, SQL, Excel Avanzado, Pandas, Data Visualization, Business Intelligence
  - **Backend & APIs**: Java, Spring Boot, REST APIs, Maven, JSON, JUnit
  - **Frontend**: React 18, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3
  - **Bases de Datos**: MySQL, Firebase, SQLite, MongoDB
  - **Herramientas & DevOps**: Git & GitHub, Docker, Postman, Figma, Vite
  - **Otros Lenguajes**: Dart, C, PHP, R [7](#0-6) 

### 4. **Projects Section**
- Showcase de proyectos académicos y personales
- Categorías: Frontend, Full-Stack, DevOps, Desktop
- Enlaces a repositorios y demos
- Tecnologías utilizadas en cada proyecto

### 5. **Education Section**
- Historial académico (Ingeniería en Computación - 7º semestre)
- **Beca Data-Driven-Decisions Specialist** (Coding Bootcamps ESPOL + MINTEL, 2025)
- Certificaciones obtenidas
- Formación complementaria

### 6. **Contact Section**
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales profesionales

## 🏗️ Estructura del Proyecto

```
curriculum/
├── src/
│   ├── components/
│   │   ├── sections/          # Secciones principales
│   │   ├── ui/               # Componentes UI reutilizables
│   ├── hooks/                # Hooks personalizados
│   ├── lib/                  # Utilidades y configuraciones
│   ├── pages/                # Páginas de la aplicación
│   ├── providers/            # Proveedores de contexto
│   ├── App.tsx               # Componente principal
│   └── main.tsx              # Punto de entrada
├── public/                   # Archivos estáticos
├── package.json              # Dependencias y scripts
├── vite.config.ts            # Configuración de Vite
├── tailwind.config.ts        # Configuración de Tailwind
└── README.md                 # Este archivo
```

## 🚀 Scripts Disponibles

- **`npm run dev`** - Inicia el servidor de desarrollo
- **`npm run build`** - Construye la aplicación para producción
- **`npm run preview`** - Previsualiza la build de producción
- **`npm run deploy`** - Despliega la aplicación [4](#0-3) 

## 🌐 Despliegue

La aplicación está configurada para desplegarse en GitHub Pages de forma automática. El sistema de despliegue soporta tanto despliegue manual como automático a través de la plataforma Lovable [8](#0-7) .

### Opciones de Despliegue:
- **GitHub Pages** - Hosting estático gratuito
- **Lovable Platform** - Despliegue automático
- **Dominio personalizado** - Configuración opcional

## 🎯 Características Destacadas

- **Diseño Responsive** - Adaptable a todos los dispositivos
- **Animaciones Fluidas** - Transiciones suaves entre secciones
- **Accesibilidad** - Componentes accesibles con Radix UI
- **Tema Oscuro/Claro** - Soporte para múltiples temas
- **Navegación Suave** - Scroll suave entre secciones
- **Optimización SEO** - Metadatos y estructura semántica

## 🔧 Configuración

El proyecto utiliza múltiples archivos de configuración para coordinar las herramientas de desarrollo:

- `vite.config.ts` - Configuración de la herramienta de build
- `tailwind.config.ts` - Configuración del framework CSS
- `eslint.config.js` - Reglas de calidad de código
- `postcss.config.js` - Pipeline de procesamiento CSS [9](#0-8) 

## 👨‍💻 Desarrollador

**David Ramírez**
- **Desarrollador Web & Backend** con experiencia en React + TypeScript y Java Spring Boot
- **Estudiante de 7º Semestre** de Ingeniería en Computación en ESPOL
- **Becario Data-Driven-Decisions Specialist** de Coding Bootcamps ESPOL + MINTEL (2025)
- **Especialista en Análisis de Datos** en formación (Python, SQL, Excel Avanzado, Business Intelligence)
- **Ubicación**: Guayaquil, Ecuador
- **Disponible** para oportunidades de desarrollo web, backend y análisis de datos

### Perfil Profesional
- Experiencia en desarrollo frontend con React y TypeScript
- Conocimientos en desarrollo backend con Java Spring Boot
- Formación en análisis de datos y business intelligence
- Trabajo colaborativo bajo metodologías ágiles
- Aprendizaje continuo en nuevas tecnologías

## 📄 Licencia

Este proyecto es un portafolio personal y está disponible bajo los términos especificados en el repositorio.

---

**Notas**: Este README está basado en la estructura y configuración actual del proyecto. Para obtener la información más actualizada, consulta los archivos de configuración y la documentación del proyecto.
