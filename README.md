# Stimate Landing Page

Este proyecto es una landing page desarrollada con [Astro](https://astro.build/). La estructura está diseñada para ser modular y facilitar la colaboración entre varios desarrolladores. Todos los elementos de la página están organizados en componentes, permitiendo un desarrollo más limpio y mantenible.

## Estructura del Proyecto

### 1. `public/`
Este directorio contiene archivos estáticos como imágenes, fuentes y otros recursos que no cambian. Todo lo que se coloque en `public/` se servirá directamente desde la raíz del sitio.

- `images/`: Imágenes utilizadas en la landing page.
- `fonts/`: Fuentes personalizadas.
- `favicon.ico`: Icono del sitio.

### 2. `src/`
Este directorio contiene todo el código fuente de la aplicación. Dentro de `src/`, el código está organizado de manera que cada componente o parte de la página tiene su propio espacio.

#### a. `components/`
En esta carpeta se encuentran todos los componentes de la landing page. Los componentes están organizados en tres categorías principales para facilitar la reutilización y el mantenimiento.

- **`atoms/`**: Contiene componentes atómicos, es decir, los elementos más pequeños y reutilizables como botones o campos de entrada.
  
- **`molecules/`**: Agrupa componentes que combinan dos o más átomos. Ejemplos incluyen formularios o tarjetas de contenido.

- **`organisms/`**: Secciones más complejas de la página que combinan varios componentes moleculares, como un header o footer.

#### b. `layouts/`
Este directorio contiene los layouts o diseños generales que se aplican a las páginas. Los layouts son responsables de la estructura básica de la página, como la barra de navegación y el pie de página.

- `MainLayout.astro`: Layout principal que envuelve la mayoría de las páginas.

#### c. `pages/`
Aquí se encuentran las páginas que constituyen la landing page. Cada archivo `.astro` en este directorio representa una ruta en el sitio.

- `index.astro`: La página principal de la landing page. Se construye combinando diferentes componentes y layouts.

### 3. `astro.config.mjs`
Este archivo contiene la configuración de Astro. Aquí puedes definir rutas, configuraciones de compilación, integraciones con herramientas de terceros, etc.

### 4. `package.json`
Este archivo gestiona las dependencias del proyecto y define scripts útiles para el desarrollo y despliegue. Algunos comandos comunes incluyen:

- `npm install`: Instala las dependencias del proyecto.
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.

## Colaboración y Control de Versiones
El proyecto utiliza Git para el control de versiones. Se recomienda seguir una estrategia de ramas para asegurar que el código se mantenga limpio y estable.

- **Rama `main`**: Contiene la versión estable del proyecto.
- **Rama `develop`**: Utilizada para integrar nuevas funcionalidades antes de pasarlas a `main`.
- **Pull Requests**: Cada miembro del equipo trabaja en su propia rama y realiza pull requests para integrar cambios en `develop`.

## Próximos Pasos

1. Configurar la estructura inicial del proyecto con base en esta guía.
2. Asignar tareas específicas a cada miembro del equipo.
3. Iniciar el desarrollo de los componentes siguiendo la estructura establecida.

---

Este README proporciona una visión general de la estructura del proyecto. A medida que el desarrollo avance, se pueden agregar secciones adicionales para documentar componentes específicos, configuraciones, o instrucciones para el despliegue.
