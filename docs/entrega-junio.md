# Entregas quincenales - Junio 2026

## Entrega 1: Desarrollo de interfaz y prototipo funcional

Fecha sugerida de entrega: primera quincena de junio de 2026.

Durante la primera quincena de junio se fortalecio la interfaz funcional del marketplace Tejidos Atenea, mejorando la navegacion del usuario entre inicio, tienda, carrito, checkout e historial de pedidos. Se ajusto la presentacion del catalogo, se agregaron indicadores visuales para productos disponibles, categorias y flujo de compra, y se inicio la validacion del sistema mediante pruebas basicas del recorrido cliente-administrador.

### Mejoras implementadas

- Rediseño de la pagina de inicio con enfoque de prototipo funcional.
- Seccion de categorias destacadas para orientar al usuario hacia la tienda.
- Encabezado de tienda con pasos del flujo de compra.
- Resumen visual del catalogo con productos visibles, productos disponibles y categorias.
- Barra de filtros mas clara para busqueda, categorias y rango de precio.
- Tarjetas de producto con categoria visible y mensajes de disponibilidad.
- Carrito con indicaciones de revision de cantidades antes de confirmar.
- Checkout guiado con pasos de resumen, entrega y metodo de pago.

### Evidencias sugeridas

- Pagina de inicio con el nuevo enfoque de prototipo funcional.
- Categorias destacadas en la pagina principal.
- Tienda con encabezado del flujo de compra.
- Resumen del catalogo y filtros.
- Tarjetas de productos con imagen, categoria, precio y disponibilidad.
- Carrito con productos agregados.
- Checkout con datos de entrega y metodo de pago.
- Pedido creado desde un usuario cliente.
- Panel administrativo verificando el pedido.

## Pruebas iniciales y correcciones

| Caso probado | Resultado esperado | Resultado obtenido |
| --- | --- | --- |
| Navegar desde inicio hacia tienda | El usuario llega al catalogo de productos | Correcto |
| Filtrar productos por categoria | La tienda muestra productos de la categoria seleccionada | Correcto |
| Buscar producto por nombre | El sistema muestra resultados relacionados | Correcto |
| Agregar producto al carrito | El carrito muestra cantidad, subtotal y total | Correcto |
| Modificar cantidad del carrito | El total se actualiza correctamente | Correcto |
| Finalizar pedido sin datos completos | El checkout muestra mensaje de validacion | Correcto |
| Finalizar pedido con datos completos | El pedido se registra en la base de datos | Correcto |
| Consultar historial de pedidos | El cliente visualiza el pedido creado | Correcto |
| Revisar pedido desde admin | El administrador puede ver y gestionar el pedido | Correcto |

## Texto corto para bitacora

Desarrollo y ajuste de la interfaz funcional del marketplace Tejidos Atenea, fortaleciendo la navegacion del usuario entre inicio, tienda, carrito, checkout, historial de pedidos y panel administrativo. Se realizaron pruebas iniciales del flujo de compra y correcciones basicas para validar el funcionamiento del sistema como prototipo funcional.

---

## Entrega 2: Interfaz terminada y avance de pruebas/correcciones

Fecha sugerida de entrega: segunda quincena de junio de 2026.

### Estado de avance

| Actividad | Estado |
| --- | --- |
| Desarrollo de interfaz - Prototipo funcional | Terminado |
| Pruebas y correcciones - Sistema funcional sin errores | En avance |

Durante la segunda quincena de junio se dio cierre al desarrollo de la interfaz del prototipo funcional del marketplace Tejidos Atenea. Se revisaron las pantallas principales del sistema, incluyendo inicio, tienda, favoritos, carrito, checkout, historial de pedidos y panel administrativo, verificando que la navegacion sea clara y que el flujo de compra pueda probarse de forma completa.

Tambien se avanzo en la etapa de pruebas y correcciones, enfocada en detectar errores visibles, validar el funcionamiento basico de los modulos y mejorar la calidad del codigo. Se ajustaron detalles de validacion en el registro de usuarios, se corrigieron importaciones innecesarias, se agrego manejo de errores en componentes administrativos y se dejo la revision de calidad del frontend sin errores.

### Correcciones realizadas

- Correccion de errores de lint en componentes y contextos del frontend.
- Ajuste de configuracion de ESLint para validar reglas utiles del proyecto sin bloquear patrones normales de React.
- Correccion de importaciones de React no utilizadas.
- Manejo de errores en la carga del dashboard administrativo y categorias.
- Ajuste de validacion del formulario de registro para respetar que el apellido es opcional.
- Verificacion de compilacion del frontend.
- Verificacion de sintaxis basica del backend.

### Pruebas y verificaciones realizadas

| Prueba realizada | Comando o revision | Resultado |
| --- | --- | --- |
| Revision de calidad del frontend | `npm run lint` | Correcto, sin errores |
| Compilacion del frontend | `npm run build` | Correcto, build generado |
| Revision de sintaxis del backend | `node --check server.js` | Correcto, sin errores |
| Validacion de registro | Formulario de registro | El apellido queda como campo opcional |
| Revision de dashboard admin | Carga de datos y manejo de errores | Correcto, evita errores silenciosos |
| Revision de categorias admin | Carga de categorias y manejo de errores | Correcto, muestra estado controlado |

### Evidencias sugeridas para pantallazos

- Pagina de inicio con productos destacados.
- Tienda con catalogo y filtros por rango de precio.
- Producto abierto en vista ampliada.
- Producto marcado como favorito y pagina de favoritos.
- Carrito con producto agregado.
- Checkout con datos de entrega y metodo de pago.
- Validacion del checkout al intentar confirmar con datos incompletos.
- Historial de pedidos del cliente.
- Panel administrativo con dashboard.
- Panel administrativo revisando pedidos o categorias.

### Texto corto para bitacora

Finalizacion del desarrollo de la interfaz del prototipo funcional del marketplace Tejidos Atenea y avance en la etapa de pruebas y correcciones. Se revisaron las pantallas principales del sistema, se corrigieron detalles de validacion y calidad de codigo, y se verifico el funcionamiento del frontend mediante pruebas de lint y compilacion, dejando el sistema en un estado funcional y sin errores detectados en las validaciones realizadas.
