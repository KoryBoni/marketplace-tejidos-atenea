import { Heart, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useFavorites } from '../../context/FavoritesContext'
import { productService } from '../../services/productService'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  const { addItem, items, updateQty } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()

  if (!product) return null

  const cartItem = items.find(item => item.product_id === product.id)
  const qty = cartItem?.cantidad ?? 0
  const imgUrl = productService.imgUrl(product.imagen_path)
  const category = product.categoria || product.categoria_nombre || 'Sin categoría'
  const outOfStock = Number(product.stock) <= 0

  const handleQty = (delta) => {
    if (qty + delta < 1) updateQty(product.id, 0)
    else updateQty(product.id, qty + delta)
  }

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <article className="product-modal" onClick={e => e.stopPropagation()}>
        <button className="product-modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        <div className="product-modal-media">
          {imgUrl
            ? <img src={imgUrl} alt={product.nombre} />
            : <div className="product-modal-placeholder">Tejidos Atenea</div>
          }
        </div>

        <div className="product-modal-info">
          <span className="product-modal-category">{category}</span>
          <h2>{product.nombre}</h2>
          <p className="product-modal-desc">
            {product.descripcion || 'Producto tejido artesanalmente por Tejidos Atenea.'}
          </p>

          <div className="product-modal-meta">
            <div>
              <span>Precio</span>
              <strong>${Number(product.precio).toLocaleString('es-CO')}</strong>
            </div>
            <div>
              <span>Disponibilidad</span>
              <strong>{outOfStock ? 'Agotado' : `${product.stock} unidades`}</strong>
            </div>
          </div>

          <div className="product-modal-actions">
            <button
              className={`btn btn-ghost favorite-action ${isFavorite(product.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(product)}
            >
              <Heart size={16} /> {isFavorite(product.id) ? 'Guardado' : 'Guardar'}
            </button>

            {qty > 0 ? (
              <div className="modal-qty-control">
                <button onClick={() => handleQty(-1)}><Minus size={14} /></button>
                <span>{qty}</span>
                <button onClick={() => handleQty(1)} disabled={qty >= product.stock}><Plus size={14} /></button>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => addItem(product, 1)}
                disabled={outOfStock}
              >
                <ShoppingBag size={16} /> Agregar al carrito
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
