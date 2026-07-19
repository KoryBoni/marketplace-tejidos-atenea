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

### Evidencias recomendadas

- Terminal con `npm run lint`.
- Terminal con `npm run build`.
- Terminal con `node --check server.js`.
- Tienda con productos cargados.
- Mensaje de error del catalogo cuando el backend no esta activo.
- Producto abierto en vista ampliada.
- Producto guardado en favoritos.
- Carrito con producto agregado.
- Checkout mostrando validacion.
- Panel administrativo.

### Bitacora

Se realizaron pruebas y correcciones del sistema funcional del marketplace Tejidos Atenea. Se reviso el flujo de compra, catalogo, filtros, favoritos, carrito, checkout y panel administrativo. Tambien se ajustaron validaciones y mensajes de error para mejorar el comportamiento del sistema durante las pruebas.

### Competencias aplicadas

Pruebas de software, validacion funcional, correccion de errores, revision de interfaz, control de calidad del codigo y documentacion tecnica basica.

