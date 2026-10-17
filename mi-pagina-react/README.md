# Fila de turnos

Panel de turnos en HTML, CSS y JavaScript. Puedes abrir `index.html` directamente
en un navegador, sin instalar dependencias, o compilar y desplegar el sitio en Vercel.

Incluye cola numerada, búsqueda, eliminación de turnos, historial de atención,
resumen de pendientes y atendidos, exportación CSV y guardado local en el navegador.
Los datos se guardan en el dispositivo actual y no se sincronizan entre dispositivos.

## Ejecutar localmente

```bash
npm install
npm run dev
```

También puedes abrir `index.html` desde el explorador de archivos para ver la
página localmente.

## Desplegar en Vercel

1. Sube este proyecto a un repositorio de Git.
2. En Vercel, importa el repositorio y establece `mi-pagina-react` como **Root Directory** si el repositorio también contiene otros proyectos.
3. Usa estos ajustes de compilación:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Selecciona **Deploy**.

La configuración de compilación también está definida en `vercel.json`. Vercel
publica el contenido generado en `dist`.
