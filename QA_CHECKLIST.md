# Checklist de Pruebas Funcionales (QA)

Se han realizado las siguientes pruebas para asegurar la estabilidad del flujo:

1.  **[EXITOSO] Login con Credenciales Válidas**: El usuario ingresa `a.berrio@yopmail.com`, recibe el token y es redirigido al Dashboard.
2.  **[EXITOSO] Persistencia de Sesión**: Al recargar el Dashboard, el token se mantiene en `sessionStorage` y no se pierde la sesión.
3.  **[EXITOSO] Protección de Rutas**: Si se intenta acceder a `/dashboard` sin haber iniciado sesión, la app redirige automáticamente a `/login`.
4.  **[EXITOSO] Validación de Formulario de Login**: Si los campos están vacíos, se muestran mensajes de error de "Campo requerido".
5.  **[EXITOSO] Manejo de Error 401/400**: Al ingresar una contraseña incorrecta, se muestra un feedback visual al usuario.
