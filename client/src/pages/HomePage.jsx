// client/src/pages/HomePage.jsx
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Package, Search, Send, ShoppingBag, Sparkles, Star } from 'lucide-react'
import logo from '../assets/favicon_nobg.png'
import ProductCard from '../components/Shop/ProductCard'
import ProductModal from '../components/Shop/ProductModal'
import { productService } from '../services/productService'
import './HomePage.css'

const FEATURES = [
  { icon: ShoppingBag, title: 'Compra sencilla', desc: 'Elige productos, revisa disponibilidad y arma tu pedido en pocos pasos.' },
  { icon: Heart, title: 'Favoritos', desc: 'Guarda tus tejidos preferidos para compararlos antes de comprar.' },
  { icon: Package, title: 'Pedidos organizados', desc: 'Consulta el estado de tus compras y confirma la informacion de entrega.' },
]

const CATEGORIES = [
  'Amigurumis pequeños',
  'Flores',
  'Mascotas en crochet',
  'Llaveros',
  'Accesorios para el hogar',
]

const INITIAL_REVIEWS = [
  { name: 'Laura M.', text: 'El ramo tejido llego precioso, muy delicado y con colores tal como lo pedi.' },
  { name: 'Camila R.', text: 'Me encanto poder ver las opciones y guardar favoritos antes de decidir.' },
  { name: 'Daniela P.', text: 'Los llaveros se ven muy bien terminados y el pedido fue facil de hacer.' },
]

const REVIEW_KEY = 'ta_home_reviews'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(REVIEW_KEY)) || INITIAL_REVIEWS
    } catch {
      return INITIAL_REVIEWS
    }
  })
  const [reviewForm, setReviewForm] = useState({ name: '', text: '' })

  useEffect(() => {
    productService.getAll({ page: 1, limit: 6 })
      .then(data => setFeaturedProducts(data.products || data || []))
      .catch(() => setFeaturedProducts([]))
  }, [])

  useEffect(() => {
    localStorage.setItem(REVIEW_KEY, JSON.stringify(reviews))
  }, [reviews])

  const heroProducts = useMemo(() => featuredProducts.slice(0, 3), [featuredProducts])

  const submitReview = (event) => {
    event.preventDefault()
    const name = reviewForm.name.trim()
    const text = reviewForm.text.trim()
    if (!name || !text) return
    setReviews(current => [{ name, text }, ...current].slice(0, 6))
    setReviewForm({ name: '', text: '' })
  }

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-text anim-slide-up">
            <span className="hero-eyebrow">Marketplace artesanal</span>
            <h1 className="hero-title">
              Tejidos Atenea
            </h1>
            <p className="hero-subtitle">
              Productos tejidos a mano en crochet para regalos, detalles
              personalizados y accesorios con encanto artesanal.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">
                Comprar ahora <ArrowRight size={16} />
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Crear cuenta
              </Link>
            </div>
            <div className="hero-stats">
              <div><strong>11</strong><span>Categorías</span></div>
              <div><strong>24/7</strong><span>Tienda abierta</span></div>
              <div><strong>Hecho</strong><span>A mano</span></div>
            </div>
          </div>

          <div className="hero-visual anim-fade-in">
            <div className="featured-showcase">
              <div className="showcase-header">
                <img src={logo} alt="Tejidos Atenea" />
                <div>
                  <span>Productos destacados</span>
                  <strong>Listos para explorar</strong>
                </div>
              </div>
              <div className="showcase-products">
                {heroProducts.length > 0 ? heroProducts.map(product => (
                  <button key={product.id} className="showcase-product" onClick={() => setSelectedProduct(product)}>
                    {product.imagen_path ? (
                      <img src={productService.imgUrl(product.imagen_path)} alt={product.nombre} />
                    ) : (
                      <span className="showcase-placeholder">TA</span>
                    )}
                    <span>
                      <strong>{product.nombre}</strong>
                      <small>${Number(product.precio).toLocaleString('es-CO')}</small>
                    </span>
                  </button>
                )) : (
                  <div className="showcase-empty">
                    <Sparkles size={22} />
                    <span>Abre la tienda para ver el catálogo disponible.</span>
                  </div>
                )}
              </div>
              <Link to="/shop" className="showcase-link">Ver todo el catálogo <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="category-strip">
        <div className="container category-strip-inner">
          <span>Categorías destacadas</span>
          <div>
            {CATEGORIES.map(category => <Link key={category} to="/shop">{category}</Link>)}
          </div>
        </div>
      </section>

      <section className="home-catalog-section">
        <div className="container">
          <div className="catalog-head">
            <div>
              <span><Search size={15} /> Explorar catálogo</span>
              <h2>Productos disponibles desde el inicio</h2>
              <p>Revisa piezas destacadas, abre cada producto en grande, guardalo como favorito o agregalo al carrito.</p>
            </div>
            <Link to="/shop" className="btn btn-secondary">
              Filtrar por precio y categoría <ArrowRight size={16} />
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="home-product-grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} onView={setSelectedProduct} />
              ))}
            </div>
          ) : (
            <div className="home-catalog-empty">
              <Package size={26} />
              <p>Cuando el backend esté activo, aquí aparecerán los productos reales de la tienda.</p>
              <Link to="/shop" className="btn btn-primary btn-sm">Ir a tienda</Link>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-heading">
            <span>Experiencia de compra</span>
            <h2>Una tienda clara para elegir, guardar y pedir tejidos</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon-wrap">
                  <Icon size={24} className="feature-icon" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="reviews-head">
            <div>
              <span>Reseñas</span>
              <h2>Lo que dicen de Tejidos Atenea</h2>
            </div>
            <div className="review-stars" aria-label="Calificación destacada">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <article className="review-card" key={`${review.name}-${index}`}>
                <div className="review-card-stars">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                </div>
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>

          <form className="review-form" onSubmit={submitReview}>
            <div>
              <span>Deja una reseña</span>
              <h3>Cuéntanos cómo fue tu experiencia</h3>
            </div>
            <input
              type="text"
              placeholder="Tu nombre"
              value={reviewForm.name}
              onChange={event => setReviewForm(form => ({ ...form, name: event.target.value }))}
            />
            <textarea
              placeholder="Escribe tu reseña"
              value={reviewForm.text}
              onChange={event => setReviewForm(form => ({ ...form, text: event.target.value }))}
            />
            <button className="btn btn-primary" type="submit">
              Publicar reseña <Send size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Encuentra el tejido ideal para tu próximo regalo</h2>
            <p>Explora el catálogo completo, filtra por precio y guarda tus favoritos antes de confirmar el pedido.</p>
            <Link to="/shop" className="btn btn-primary">
              Explorar tienda <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
