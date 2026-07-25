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

## Documentacion

- `docs/manual-tecnico.md`: instalacion, estructura, rutas principales y comandos de revision.
- `docs/manual-usuario.md`: uso del sistema para cliente y administrador.
