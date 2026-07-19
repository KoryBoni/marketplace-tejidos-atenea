# Marketplace Tejidos Atenea

Proyecto productivo para la etapa productiva del programa Tecnico en Programacion de Software. El sistema permite publicar productos tejidos, gestionar categorias, recibir pedidos de clientes y administrar ventas desde un panel privado.

## Modulos implementados

- Autenticacion de usuarios con roles de cliente y administrador.
- Catalogo de productos con busqueda, filtros y control de stock.
- Carrito de compras y checkout con datos de entrega.
- Historial de pedidos para el cliente.
- Panel administrativo con dashboard, productos, categorias y pedidos.
- Reportes simples: ventas, pedidos por estado, productos agotados y productos con bajo stock.

## Tecnologias

- Frontend: React, Vite, React Router, Axios, Lucide React.
- Backend: Node.js, Express, MySQL, JWT, Multer.
- Base de datos: MySQL.

## Instalacion

### 1. Base de datos

Crear la base de datos ejecutando:

```sql
server/database.sql
```

Si ya existe una base creada antes de mayo, ejecutar tambien:

```sql
server/migrations/2026-05-entrega-pedidos.sql
```

### 2. Backend

```bash
cd server
npm install
npm run dev
```

Crear un archivo `.env` en `server` con estos datos ajustados al equipo:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=tejidos_atenea
DB_PORT=3306
JWT_SECRET=tejidos_atenea_secret
```

### 3. Frontend

```bash
cd client
npm install
npm run dev
```

La aplicacion abre normalmente en:

```text
http://localhost:5173
```

## Credenciales de prueba

Contraseña para ambos usuarios: `123456`

- Administrador: `admin@tejidos.com`
- Cliente: `cliente@ejemplo.com`

## Flujo de prueba recomendado

1. Iniciar sesion como cliente.
2. Entrar a la tienda y agregar productos al carrito.
3. Finalizar pedido con nombre, telefono, direccion y metodo de pago.
4. Revisar el pedido en `Mis Pedidos`.
5. Iniciar sesion como administrador.
6. Entrar al panel admin y revisar dashboard, productos, categorias y pedidos.
7. Cambiar el estado de un pedido y verificar que se actualiza.

## Entrega quincenal mayo 1

Durante la primera quincena de mayo se avanzo en el modulo administrativo y en la interfaz funcional del marketplace Tejidos Atenea. Se implemento un panel de administracion para productos, categorias y pedidos, ademas de una vista de dashboard con indicadores basicos. Tambien se ajusto el flujo de compra para registrar datos del cliente y metodo de pago, permitiendo al administrador consultar y gestionar los pedidos realizados.

## Entrega quincenal mayo 2

Durante la segunda quincena de mayo se realizaron mejoras de interfaz, validaciones y reportes simples para el marketplace. Se fortalecio el panel administrativo con informacion util para el control de ventas y pedidos, se mejoro la experiencia del cliente en el proceso de compra y se documentaron pruebas funcionales del sistema.

## Entrega quincenal junio 1

Durante la primera quincena de junio se fortalecio la interfaz del marketplace como prototipo funcional. Se ajusto la pagina de inicio, la tienda, el catalogo, el carrito y el checkout para mejorar la navegacion del usuario y facilitar las pruebas iniciales del flujo de compra.

## Entrega quincenal junio 2

Durante la segunda quincena de junio se dio por terminado el desarrollo de interfaz como prototipo funcional y se avanzo en la etapa de pruebas y correcciones del sistema. Se revisaron los modulos principales del frontend, se corrigieron detalles de validacion y calidad de codigo, y se verifico que la aplicacion compile correctamente.

Validaciones realizadas:

- `npm run lint` en el frontend sin errores.
- `npm run build` en el frontend sin errores.
- `node --check server.js` en el backend sin errores de sintaxis.

Estado de la entrega: interfaz terminada como prototipo funcional y avance de pruebas/correcciones para mantener el sistema funcional sin errores visibles.

## Entrega quincenal julio 1

Durante la primera quincena de julio se realizaron pruebas y correcciones del sistema funcional. Se reviso el flujo de tienda, filtros, favoritos, carrito, checkout y panel administrativo.

Correcciones aplicadas:

- Mensaje de error cuando el catalogo no carga.
- Boton para reintentar la carga de productos.
- Validacion para no confirmar pedidos con carrito vacio.
- Registro de casos de prueba en `docs/entrega-julio.md`.

Validaciones sugeridas:

- `npm run lint`.
- `npm run build`.
- `node --check server.js`.

Estado de la entrega: avance de pruebas y correcciones.
