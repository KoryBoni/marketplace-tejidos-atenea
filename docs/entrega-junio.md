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
