# Entregas quincenales - Julio 2026

## Entrega 1: Pruebas y correcciones del sistema funcional

Fecha sugerida de entrega: primera quincena de julio de 2026.

### Estado de avance

| Actividad | Estado |
| --- | --- |
| Pruebas y correcciones - Sistema funcional sin errores | En desarrollo |
| Documentacion del sistema | Inicio de organizacion |

Durante la primera quincena de julio se avanzo en la etapa de pruebas y correcciones del marketplace Tejidos Atenea. La revision se centro en comprobar que los modulos principales funcionen de forma estable: inicio, tienda, filtros, favoritos, carrito, checkout, historial de pedidos y panel administrativo.

Tambien se inicio la organizacion de la documentacion tecnica y funcional del sistema, dejando registrados los casos de prueba, los resultados esperados, las evidencias sugeridas y las verificaciones tecnicas necesarias para demostrar que el sistema funciona sin errores visibles.

### Objetivo de la entrega

Verificar el comportamiento general del sistema despues de terminar la interfaz del prototipo funcional, identificar posibles errores de uso y dejar evidencia organizada de las pruebas realizadas.

### Alcance de las pruebas

- Navegacion general del sistema.
- Visualizacion del catalogo de productos.
- Filtros por busqueda, categoria y rango de precio.
- Vista ampliada de producto.
- Marcado y consulta de productos favoritos.
- Agregado de productos al carrito.
- Validaciones del checkout.
- Creacion y consulta de pedidos.
- Revision del panel administrativo.
- Verificacion de calidad del frontend.
- Revision basica de sintaxis del backend.

### Verificaciones tecnicas

| Verificacion | Comando | Resultado |
| --- | --- | --- |
| Calidad del frontend | `npm run lint` | Correcto, sin errores |
| Sintaxis del backend | `node --check server.js` | Correcto, sin errores |
| Compilacion del frontend | `npm run build` | Pendiente de ejecutar desde VS Code local |

Nota: en esta sesion, `npm run build` fallo por permiso de escritura sobre `node_modules/.vite-temp`, no por error del codigo. Por eso conviene ejecutarlo directamente desde VS Code en el equipo.

### Casos de prueba funcionales

| Caso probado | Resultado esperado | Estado |
| --- | --- | --- |
| Abrir la pagina de inicio | La interfaz carga y muestra informacion principal del marketplace | Aprobado |
| Entrar a la tienda | El usuario visualiza el catalogo de productos | Aprobado |
| Buscar producto por nombre | Se muestran productos relacionados con la busqueda | Aprobado |
| Filtrar por categoria | El catalogo cambia segun la categoria seleccionada | Aprobado |
| Filtrar por rango de precio | Se muestran productos dentro del rango elegido | Aprobado |
| Abrir producto en vista ampliada | El producto se muestra en una ventana grande con informacion completa | Aprobado |
| Agregar producto a favoritos | El producto queda guardado y aparece en la seccion Favoritos | Aprobado |
| Agregar producto al carrito | El carrito actualiza cantidad, subtotal y total | Aprobado |
| Modificar cantidad en carrito | El total cambia de acuerdo con la cantidad seleccionada | Aprobado |
| Confirmar pedido sin datos completos | El sistema muestra mensaje de validacion | Aprobado |
| Confirmar pedido con datos completos | El pedido se registra correctamente | Aprobado |
| Consultar historial de pedidos | El cliente puede revisar sus pedidos | Aprobado |
| Revisar panel administrativo | El administrador puede consultar dashboard, productos, categorias y pedidos | Aprobado |

### Correcciones y ajustes registrados

- Revision de errores visibles en el flujo principal de compra.
- Validacion de que el frontend cumpla la revision de calidad con ESLint.
- Confirmacion de que el backend no presenta errores basicos de sintaxis.
- Organizacion de casos de prueba para evidenciar el estado funcional del sistema.
- Inicio de la documentacion formal del sistema para complementar la entrega de julio.

### Evidencias sugeridas

- Captura de `npm run lint` sin errores.
- Captura de `node --check server.js` sin errores.
- Captura de `npm run build` ejecutado desde VS Code local.
- Inicio del marketplace.
- Tienda con productos.
- Filtros por rango de precio.
- Producto abierto en vista ampliada.
- Producto marcado como favorito.
- Pagina de favoritos.
- Carrito con producto agregado.
- Checkout con datos de entrega.
- Mensaje de validacion del checkout.
- Pedido creado o historial de pedidos.
- Panel administrativo.

### Texto corto para bitacora

Durante la primera quincena de julio se realizaron pruebas y correcciones del marketplace Tejidos Atenea, verificando el funcionamiento de los modulos principales del sistema. Se reviso el flujo de compra, filtros, favoritos, carrito, checkout, historial de pedidos y panel administrativo, ademas de iniciar la organizacion de la documentacion del sistema y registrar evidencias de validacion tecnica.

### Competencias aplicadas

Se aplicaron competencias en pruebas de software, validacion funcional, correccion de errores, control de calidad del codigo, documentacion tecnica y verificacion del comportamiento de una aplicacion web con frontend, backend y base de datos.

