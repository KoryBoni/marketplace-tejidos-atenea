# Manual tecnico - Marketplace Tejidos Atenea

## Descripcion general

Tejidos Atenea es un marketplace web para publicar productos tejidos, gestionar categorias, recibir pedidos y administrar ventas desde un panel privado.

## Tecnologias utilizadas

- Frontend: React, Vite, React Router, Axios.
- Backend: Node.js, Express.
- Base de datos: MySQL.
- Autenticacion: JWT.
- Carga de imagenes: Multer.

## Estructura del proyecto

```text
client/
  src/
    components/
    context/
    pages/
    services/
server/
  src/
    config/
    controllers/
    middleware/
    routes/
    utils/
  database.sql
```

## Instalacion del backend

```bash
cd server
npm install
npm run dev
```

Archivo `.env` requerido:

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

## Instalacion del frontend

```bash
cd client
npm install
npm run dev
```

URL local:

```text
http://localhost:5173
```

## Base de datos

Crear la base de datos ejecutando:

```text
server/database.sql
```

Si la base ya existia antes de las mejoras de pedidos, ejecutar:

```text
server/migrations/2026-05-entrega-pedidos.sql
```

## Rutas principales

### Autenticacion

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### Productos

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/products/admin/all`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `PATCH /api/products/:id/reactivate`

### Categorias

- `GET /api/categories`
- `GET /api/categories/:id`
- `POST /api/categories`
- `PUT /api/categories/:id`
- `DELETE /api/categories/:id`

### Pedidos

- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:id`
- `PATCH /api/orders/:id/estado`
- `PATCH /api/orders/:id/cancelar`

## Roles del sistema

- Cliente: consulta productos, agrega al carrito, crea pedidos y revisa su historial.
- Administrador: gestiona productos, categorias, pedidos y revisa el dashboard.

## Comandos de revision

Frontend:

```bash
cd client
npm run lint
npm run build
```

Backend:

```bash
cd server
node --check server.js
```
