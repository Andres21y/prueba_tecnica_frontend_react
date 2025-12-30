# BeKind - React Frontend Challenge
Este proyecto es una aplicación web construida con React 18 y TypeScript que gestiona la autenticación de usuarios y la administración de "Acciones" a través de dos APIs en subdominios distintos.
Tabla de Contenidos
Instalación y Configuración
Scripts Disponibles
Arquitectura del Proyecto
Stack Tecnológico
Decisiones Técnicas
Supuestos y Ambigüedad
QA Checklist
Instalación y Configuración
Requisitos previos
Node.js (v16 o superior)
npm o yarn
Pasos para inicializar localmente
Clonar el repositorio:
code
Bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
Instalar dependencias:
code
Bash
npm install
Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade las siguientes URLs base:
code
Env
VITE_URL_AUTH=https://dev.apinetbo.bekindnetwork.com/api
VITE_URL_API=https://dev.api.bekindnetwork.com/api/v1
Ejecutar el proyecto:
code
Bash
npm run dev
La aplicación estará disponible en http://localhost:5173.
Arquitectura del Proyecto
Se ha seguido una arquitectura modular para separar responsabilidades:
code
Text
src/
 ├── api/        # Utilidades de fetch y configuración de clientes.
 ├── components/ # Componentes reutilizables (UI, SearchBar, Layouts).
 ├── context/    # Manejo de estado global (AuthContext).
 ├── hooks/      # Hooks personalizados (useActions para lógica de datos).
 ├── pages/      # Vistas principales (Login, Dashboard, Formulario).
 ├── routes/     # Configuración de react-router y rutas privadas.
 ├── styles/     # Archivos CSS globales y módulos.
 ├── types/      # Definición de interfaces de TypeScript.
 └── utils/      # Constantes y funciones auxiliares.
Stack Tecnológico
React 18: Biblioteca base para la UI.
TypeScript: Para garantizar tipado estático y reducir errores en tiempo de ejecución.
Vite: Herramienta de construcción (build tool) rápida.
React Router Dom: Gestión de navegación y protección de rutas.
React Hook Form: Manejo eficiente de formularios y validaciones.
Context API: Gestión del estado global de autenticación sin librerías pesadas.
Fetch API: Implementación nativa para el consumo de servicios REST.
Decisiones Técnicas
1. Utilidad apiFetch personalizada
Se desarrolló un "wrapper" sobre la Fetch API nativa que centraliza:
El manejo dinámico de dos subdominios (auth y api).
La inyección automática del token Bearer desde sessionStorage.
El parseo de respuestas tanto en formato JSON como en Plain Text (necesario para la respuesta del Login).
Captura de errores centralizada (404, 400, 500).
2. Autenticación y Seguridad
Se optó por sessionStorage para persistir el token, garantizando que la sesión se elimine al cerrar la pestaña/navegador, aumentando la seguridad sobre localStorage.
Se implementó un componente PrivateRoute que intercepta accesos no autorizados y redirige al Login.
3. Manejo de Formularios
Se utilizó React Hook Form por su excelente rendimiento (evita re-renders innecesarios) y facilidad para implementar validaciones en tiempo real antes de enviar datos al servidor.
Supuestos y Ambigüedad
Como se mencionó en el requerimiento, algunos aspectos se resolvieron bajo criterio técnico:
Payload de Creación (admin-add): Dado que el endpoint no estaba documentado, se infirieron los campos obligatorios (name, description, status) basándose en el esquema de respuesta del listado de acciones.
Paginación: Se implementó una paginación lógica utilizando los parámetros pageNumber y pageSize. Al no contar con el total de páginas desde el backend, se habilitó una navegación secuencial.
CORS/404: Se implementaron mecanismos de limpieza de URLs para evitar caracteres accidentales (como puntos y coma) y asegurar que el content-type siempre sea application/json.
QA Checklist
El detalle completo de las pruebas realizadas se encuentra en el archivo:
QA_CHECKLIST.md
Incluye pruebas de flujo exitoso de login, validación de formularios, persistencia de sesión y manejo de errores de red.


Candidato: Andres Dario Cordoba

