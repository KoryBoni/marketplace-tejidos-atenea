# Entregas quincenales - Mayo 2026

## Entrega 1: Panel administrativo e interfaz funcional

Fecha sugerida de entrega: 18 o 19 de mayo de 2026.

Durante la primera quincena de mayo se avanzo en el modulo administrativo y en la interfaz funcional del marketplace Tejidos Atenea. Se implemento un panel de administracion para productos, categorias y pedidos, ademas de una vista de dashboard con indicadores basicos. Tambien se ajusto el flujo de compra para registrar datos del cliente y metodo de pago, permitiendo al administrador consultar y gestionar los pedidos realizados.

### Evidencias sugeridas

- Pantalla principal del marketplace.
- Catalogo de productos.
- Carrito de compras.
- Formulario de checkout con datos de entrega.
- Historial de pedidos del cliente.
- Panel admin con dashboard.
- Gestion de productos.
- Gestion de categorias.
- Gestion de pedidos.

## Entrega 2: Mejoras de interfaz, reportes y validacion funcional

Fecha sugerida de entrega: 30 de mayo de 2026.

Durante la segunda quincena de mayo se realizaron mejoras de interfaz, validaciones y reportes simples para el marketplace. Se fortalecio el panel administrativo con informacion util para el control de ventas y pedidos, se mejoro la experiencia del cliente en el proceso de compra y se documentaron pruebas funcionales del sistema.

### Mejoras incluidas

- Validacion de nombre, telefono y direccion antes de crear pedidos.
- Validacion de stock disponible al crear pedidos.
- Visualizacion de datos de entrega en el panel administrativo.
- Filtro de pedidos por estado.
- Reportes simples de ventas, pedidos activos, productos agotados y bajo stock.
- Estados vacios para categorias y pedidos.
- Documentacion de instalacion y pruebas.

## Tabla de pruebas manuales

| Caso probado | Resultado esperado | Resultado obtenido |
| --- | --- | --- |
| Registro e inicio de sesion de cliente | El usuario puede entrar a la tienda | Correcto |
| Agregar productos al carrito | El carrito muestra cantidades y total | Correcto |
| Crear pedido con datos de entrega | El pedido queda registrado con nombre, telefono, direccion y pago | Correcto |
| Crear pedido sin direccion | El sistema muestra error de validacion | Correcto |
| Pedido con cantidad mayor al stock | El sistema impide la compra | Correcto |
| Historial de pedidos del cliente | El cliente ve sus pedidos e informacion de entrega | Correcto |
| Login de administrador | El administrador puede entrar al panel | Correcto |
| Gestion de productos | El admin puede crear, editar, desactivar y reactivar productos | Correcto |
| Gestion de categorias | El admin puede crear, editar y eliminar categorias | Correcto |
| Gestion de pedidos | El admin ve pedidos y cambia estados permitidos | Correcto |
| Dashboard administrativo | Muestra productos, pedidos, ventas y alertas de stock | Correcto |

## Texto corto para presentar

En mayo se continuo el desarrollo del marketplace Tejidos Atenea, enfocando el avance en el modulo administrativo, la interfaz funcional y el flujo de pedidos. El sistema permite registrar clientes, visualizar productos, realizar pedidos con datos de entrega y gestionar la informacion desde un panel de administracion con reportes simples.
