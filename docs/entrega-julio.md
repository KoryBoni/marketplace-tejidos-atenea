# Entregas quincenales - Julio 2026

## Entrega 1: Pruebas y correcciones

Periodo: primera quincena de julio.

### Actividad

Se realizaron pruebas sobre el funcionamiento general del marketplace Tejidos Atenea y se aplicaron correcciones pequeñas para mejorar la respuesta del sistema ante errores comunes.

### Ajustes realizados

- Se agrego mensaje de error cuando el catalogo no carga.
- Se agrego boton para reintentar la carga de productos.
- Se ajusto el checkout para no permitir confirmar pedidos con el carrito vacio.
- Se agrego mensaje informativo cuando el resumen del pedido no tiene productos.
- Se reviso el funcionamiento del flujo cliente y administrador.

### Pruebas realizadas

| Prueba | Resultado esperado | Estado |
| --- | --- | --- |
| Cargar tienda con backend activo | Se muestran productos del catalogo | Aprobado |
| Cargar tienda con backend apagado | Se muestra mensaje de error y opcion de reintentar | Aprobado |
| Filtrar productos por categoria | El listado cambia segun la categoria | Aprobado |
| Filtrar productos por precio | El listado respeta el rango seleccionado | Aprobado |
| Abrir producto ampliado | Se muestra informacion completa del producto | Aprobado |
| Marcar producto como favorito | El producto aparece en Favoritos | Aprobado |
| Agregar producto al carrito | Se actualizan cantidad y total | Aprobado |
| Confirmar pedido con carrito vacio | El sistema muestra mensaje de validacion | Aprobado |
| Confirmar pedido sin datos completos | El sistema muestra mensaje de validacion | Aprobado |
| Revisar panel administrador | Se pueden consultar productos, categorias y pedidos | Aprobado |

### Verificaciones tecnicas

| Comando | Uso |
| --- | --- |
| `npm run lint` | Revisar errores de calidad en frontend |
| `npm run build` | Verificar compilacion del frontend |
| `node --check server.js` | Revisar sintaxis del backend |

### Competencias aplicadas

Pruebas de software, validacion funcional, correccion de errores, revision de interfaz, control de calidad del codigo y documentacion tecnica basica.

---

## Entrega 2: Documentacion del sistema

Periodo: segunda quincena de julio.

### Actividad

Se inicio la documentacion del sistema con la elaboracion del manual tecnico y el manual de usuario.

### Ajustes realizados

- Se creo `docs/manual-tecnico.md`.
- Se creo `docs/manual-usuario.md`.
- Se documento instalacion, estructura del proyecto, rutas principales y roles del sistema.
- Se documento el uso del sistema para cliente y administrador.
- Se corrigio el orden de la ruta administrativa de productos para evitar conflicto con la ruta de detalle por id.

### Archivos relacionados

| Archivo | Contenido |
| --- | --- |
| `docs/manual-tecnico.md` | Instalacion, estructura, rutas y comandos de revision |
| `docs/manual-usuario.md` | Uso del sistema por cliente y administrador |
| `server/src/routes/products.js` | Correccion de orden de rutas de productos |

### Competencias aplicadas

Documentacion tecnica, descripcion de procesos de usuario, organizacion de informacion del proyecto, identificacion de modulos y revision de rutas del backend.
