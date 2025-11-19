# Módulo 2 - Evaluación de Módulo

> Desarrollo de un sitio web informativo sobre ciberseguridad, utilizando HTML, CSS, Bootstrap y JavaScript.

## 🧠 Descripción

Este proyecto fue desarrollado como parte del Bootcamp **Desarrollo de Aplicaciones Full Stack JavaScript** como ejercicio de evaluación de módulo al final del segundo módulo. Su objetivo principal es poner en práctica los conocimientos adquiridos a la fecha, como:
- HTML
- CSS
- BootStrap
- JavaScript
- Git y GitHub

## 🔍 Contexto

La ciberseguridad es un tema de gran importancia en la era digital, ya que permite proteger la información y la privacidad en línea. Para esta actividad, deberás desarrollar un **sitio web informativo sobre ciberseguridad**, en el que se expliquen conceptos clave, se brinden consejos de seguridad y se presenten ejemplos de ataques comunes y cómo prevenirlos.

Este proyecto formará parte de tu portafolio, por lo que se evaluará tanto la funcionalidad como el diseño y la documentación del código.

## ✅ Objetivo

Crear un sitio web responsivo e interactivo que informe sobre ciberseguridad, aplicando conocimientos en **HTML, CSS, JavaScript, Bootstrap y jQuery**, y gestionando el código con **Git y GitHub**.

## 📖 Instrucciones

### 1. Estructura del Proyecto

Deberás diseñar un sitio web de **tres páginas** con el siguiente contenido:

#### 1. Inicio
- Introducción a la ciberseguridad.
- Barra de navegación con enlaces a las demás secciones.
- Imagen destacada con un mensaje llamativo.

#### 2. Amenazas Comunes
- Información sobre ataques cibernéticos como **phishing, ransomware, malware y ataques DDoS**.
- Uso de **tarjetas o secciones interactivas** para cada tipo de amenaza.
- Un carrusel o acordeón con ejemplos de casos reales.

#### 3. Consejos de Seguridad
- Lista de buenas prácticas para protegerse en línea.
- Formulario de contacto para solicitar más información (con validación en JavaScript).
- Un modal con un "test de seguridad" donde el usuario pueda responder preguntas básicas y recibir retroalimentación.

### 2. Diseño y Estilo
- **HTML5**: Uso de etiquetas semánticas para estructurar correctamente el contenido.
- **CSS3 y Bootstrap**: Implementación de estilos modernos y diseño responsivo con **media queries**.
- **jQuery**: Uso de efectos interactivos como **ocultar/mostrar información, manipulación del DOM y validaciones**.
- **Bootstrap + jQuery Plugins**: Inclusión de al menos un **carrusel, acordeón o modal**.

### 3. Uso de Git y GitHub
- Inicializar el repositorio con `git init`.
- Realizar **mínimo 5 commits** con mensajes descriptivos.
- Configurar `.gitignore` para excluir archivos innecesarios.
- Publicar el código en GitHub y compartir el enlace.
- Documentar el proyecto en `README.md`, explicando su estructura y funcionalidad.

## 🧪 Cómo ejecutar

1. #### Clonar el repositorio:
- git clone https://github.com/ndevia/ciberseguridad

2. #### Navegar a la carpeta del proyecto
- cd Evaluacion_modulo_Natalia_Devia

3. #### Abrir el proyecto:
Puede realizarse utilizando cualquiera de las formas descritas a continuación:
- Abrir el archivo `index.html` en el navegador
- Abrir `VS Code` y ejecutar con `Live Server` 

## 🚀 Despliegue:
Este proyecto fue desplegado en GitHub Pages y se puede visitar en el siguiente [link](https://ndevia.github.io/ciberseguridad/).

## 👀 Notas:
- Para el formulario de contacto, se dejó como opcional el campo `nombre`, en caso de que el usuario no quisiera compartirlo, en ese caso, se le asignará el nombre "Ánonimo" automáticamente. Los campos `email` y `mensaje` son obligatorios, ya que si el usuario solicita más información debiese haber una forma de contactarlo y es necesario que deje un comentario, para esto se le asignó el atributo `required` en ambos. Adicionalmente, para poder entregar al usuario mensajes personalizados, si olvida alguno de estos datos se utilizó `novalidate` para evitar que las validaciones del navegador se muestren antes de las propias, ésto lamentablemente hace posible ingresar un correo electrónico sin `@`, por lo que se deberá reforzar en el futuro utilizando expresiones regulares para la validación de correo electrónico.
- El formulario de contacto no tiene ninguna funcionalidad de momento más que guardar los datos ingresados en un objeto.
- Las preguntas del quiz y sus alternativas se crearon de manera dinámica utilizando `JavaScript` para evitar sobrecargar el anchivo `html` excesivamente. Éstas además se guardaron en un archivo independiente (`quizData.js`), para mantener el orden.
- Una mejora que podría agregarse al quiz sería la posibilidad de reiniciarlo en cualquier momento que el usuario necesite o para poder volver a jugar sin tener que reiniciar la página.  
- Toda la información utilizada para este proyecto se obtuvo de las siguientes fuentes:
  - [SafetyCulture - La ciberseguridad explicada: Una guía sencilla](https://safetyculture.com/es/temas/ciberseguridad/).
  - [ThinkBig - Ciberseguridad: qué es y consejos para protegerte en tu día a día de forma simple](https://blogthinkbig.com/consejos-ciberseguridad).