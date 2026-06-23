// client/src/pages/ShopPage.jsx
import ProductGallery from '../components/Shop/ProductGallery'
import './ShopPage.css'

export default function ShopPage() {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <span className="shop-kicker">Catálogo artesanal</span>
          <h1>Tienda Tejidos Atenea</h1>
          <p>Explora productos tejidos a mano, filtra por categoría y encuentra el detalle ideal para tu pedido.</p>
          <div className="shop-flow">
            <span>1. Elige</span>
            <span>2. Agrega al carrito</span>
            <span>3. Confirma pedido</span>
          </div>
        </div>
      </div>
      <div className="container shop-body">
        <ProductGallery />
      </div>
    </div>
  )
}
