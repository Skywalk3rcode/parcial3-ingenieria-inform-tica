# Mogi Assistant - Manual Digital de Usuario

Este repositorio contiene la aplicación web del **Manual Digital e Interactivo de Mogi**, el asistente virtual de contención y orientación en salud mental. La aplicación está diseñada como una SPA (Single Page Application) moderna construida con **React** y **Vite**, ofreciendo una experiencia interactiva completa de exploración y documentación del proyecto.

---

## 🌟 Características Principales

1. **Diseño de Desplazamiento Continuo (Single-Page Scroll):** Toda la información se ubica en una misma página, permitiendo una navegación cómoda mediante scrolling o seleccionando elementos del menú lateral.
2. **Navegación Inteligente Activa:** El menú lateral detecta y resalta de manera automática la sección activa de la pantalla utilizando la API de `IntersectionObserver` de JavaScript.
3. **Simulador de Crisis Integrado:** Módulo interactivo en React que emula las expresiones regulares del backend (`crisis_detector.py`) para clasificar frases del usuario (Nivel 0 al 3) y mostrar las conductas y contactos de emergencia asociados.
4. **Descarga de Documentación:** Acceso y descarga directa en formato **PDF** de la propuesta de arquitectura y diseño ("Formato Proyecto Ingeniería de Software") convertida directamente a recursos de la app.
5. **Autores y Repositorio:** Sección con los detalles de los autores del proyecto (Pedro Juan y Miguel Ángel) y enlaces al código fuente del chatbot.

---

## 🛠️ Tecnologías y Estilos
* **React 19:** Construcción de componentes reactivos y manejo de estados locales del simulador.
* **Vite 8:** Compilador ultra-rápido para el empaquetado y hot reloading en desarrollo.
* **Vanilla CSS (Glassmorphism):** Diseño visual premium con transparencias, bordes suaves y paletas de colores oscuras relajantes.

---

## ⚙️ Guía de Ejecución Local

Sigue estos pasos sencillos para iniciar el servidor de desarrollo local del manual:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Skywalk3rcode/parcial3-ingenieria-inform-tica.git
cd parcial3-ingenieria-inform-tica
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
La aplicación web se ejecutará automáticamente en la dirección local: `http://localhost:5173/`.

### 4. Compilar para Producción
Si deseas construir el bundle estático optimizado para despliegue:
```bash
npm run build
```

---

## 👥 Creadores del Proyecto
* **Pedro Juan Mendoza Ovallos** (Co-Creador y Front-End/IA Dev)
* **Miguel Ángel Ramírez Corredor** (Co-Creador y Back-End/DB Dev)
