-- Migracion para bases de datos creadas antes de la entrega de mayo.
-- Ejecutar una sola vez sobre la base tejidos_atenea existente.

USE tejidos_atenea;

ALTER TABLE products
  ADD COLUMN activo BOOLEAN DEFAULT TRUE AFTER imagen_path;

ALTER TABLE orders
  ADD COLUMN cliente_nombre VARCHAR(255) NOT NULL AFTER user_id,
  ADD COLUMN cliente_telefono VARCHAR(30) NOT NULL AFTER cliente_nombre,
  ADD COLUMN cliente_direccion VARCHAR(255) NOT NULL AFTER cliente_telefono;
