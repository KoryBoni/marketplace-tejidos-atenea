import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/Shop/ProductCard'
import ProductModal from '../components/Shop/ProductModal'
import { useFavorites } from '../context/FavoritesContext'
import './FavoritesPage.css'
import { useState } from 'react'

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites()
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <div className="container">
          <span className="favorites-kicker">Selección personal</span>
          <h1><Heart size={28} /> Favoritos</h1>
          <p>Guarda productos que te gusten para compararlos antes de hacer tu pedido.</p>
        </div>
      </div>

      <div className="container favorites-body">
        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <Heart size={34} />
            <h2>Aún no tienes favoritos</h2>
            <p>Marca productos desde la tienda para volver a ellos rápidamente.</p>
            <Link to="/shop" className="btn btn-primary">
              <ShoppingBag size={16} /> Explorar tienda
            </Link>
          </div>
        ) : (
          <>
            <div className="favorites-actions">
              <p>{favorites.length} producto{favorites.length === 1 ? '' : 's'} guardado{favorites.length === 1 ? '' : 's'}</p>
              <button className="btn btn-ghost btn-sm" onClick={clearFavorites}>Limpiar favoritos</button>
            </div>
            <div className="product-grid">
              {favorites.map(product => <ProductCard key={product.id} product={product} onView={setSelectedProduct} />)}
            </div>
          </>
        )}
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
