// client/src/components/Shop/ProductGallery.jsx
import { useState, useEffect, useCallback } from 'react'
import { PackageCheck, Search, SlidersHorizontal, X } from 'lucide-react'
import { productService } from '../../services/productService'
import categoryService from '../../services/categoryService'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import LoadingSpinner from '../Common/LoadingSpinner'
import './ProductGallery.css'

const PRICE_RANGES = [
  { label: 'Todos los precios', min: '', max: '' },
  { label: 'Hasta $20.000', min: '', max: '20000' },
  { label: '$20.000 - $50.000', min: '20000', max: '50000' },
  { label: '$50.000 - $100.000', min: '50000', max: '100000' },
  { label: 'Más de $100.000', min: '100000', max: '' },
]

export default function ProductGallery() {
  const [products, setProducts]     = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading]       = useState(true)
  const [page, setPage]             = useState(1)
  const [total, setTotal]           = useState(0)
  const [filters, setFilters]       = useState({
    category_id: '', search: '', precio_min: '', precio_max: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const LIMIT = 12

  useEffect(() => {
    categoryService.getAll().then(d => setCategories(d.categories || d)).catch(() => {})
  }, [])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await productService.getAll({ ...filters, page, limit: LIMIT })
      setProducts(data.products || data)
      setTotal(data.pagination?.total || (data.products || data).length)
    } catch { setProducts([]) }
    finally { setLoading(false) }
  }, [filters, page])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  const applyFilter = (key, val) => {
    setFilters(f => ({ ...f, [key]: val }))
    setPage(1)
  }

  const clearFilters = () => {
    setFilters({ category_id: '', search: '', precio_min: '', precio_max: '' })
    setPage(1)
  }

  const applyPriceRange = (range) => {
    setFilters(f => ({ ...f, precio_min: range.min, precio_max: range.max }))
    setPage(1)
  }

  const hasFilters = filters.category_id || filters.search || filters.precio_min || filters.precio_max
  const pages = Math.ceil(total / LIMIT)
  const visibleProducts = products.length
  const availableProducts = products.filter(p => Number(p.stock) > 0).length

  return (
    <div className="gallery-wrap">
      <div className="catalog-summary">
        <div>
          <span>Productos visibles</span>
          <strong>{visibleProducts}</strong>
        </div>
        <div>
          <span>Disponibles</span>
          <strong>{availableProducts}</strong>
        </div>
        <div>
          <span>Categorías</span>
          <strong>{categories.length}</strong>
        </div>
      </div>

      {/* Toolbar */}
      <div className="gallery-toolbar">
        <div className="toolbar-title">
          <PackageCheck size={18} />
          <div>
            <strong>Explorar catálogo</strong>
            <span>Busca por nombre, categoría o rango de precio</span>
          </div>
        </div>
        <div className="search-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar productos…"
            value={filters.search}
            onChange={e => applyFilter('search', e.target.value)}
            className="search-input"
          />
          {filters.search && (
            <button className="search-clear" onClick={() => applyFilter('search', '')}>
              <X size={14} />
            </button>
          )}
        </div>

        <div className="category-pills">
          <button
            className={`pill ${!filters.category_id ? 'pill-active' : ''}`}
            onClick={() => applyFilter('category_id', '')}
          >Todos</button>
          {categories.map(c => (
            <button
              key={c.id}
              className={`pill ${filters.category_id == c.id ? 'pill-active' : ''}`}
              onClick={() => applyFilter('category_id', c.id)}
            >{c.nombre}</button>
          ))}
        </div>

        <button
          className={`btn btn-ghost btn-sm filter-toggle ${hasFilters ? 'has-filters' : ''}`}
          onClick={() => setShowFilters(v => !v)}
        >
          <SlidersHorizontal size={15} />
          Filtros {hasFilters && <span className="filter-dot" />}
        </button>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="filter-panel anim-slide-up">
          <div className="price-range-panel">
            <span>Rango de precio</span>
            <div className="price-range-options">
              {PRICE_RANGES.map(range => {
                const active = filters.precio_min === range.min && filters.precio_max === range.max
                return (
                  <button
                    key={range.label}
                    className={active ? 'active' : ''}
                    onClick={() => applyPriceRange(range)}
                  >
                    {range.label}
                  </button>
                )
              })}
            </div>
            {hasFilters && (
              <button className="btn btn-ghost btn-sm clear-btn" onClick={clearFilters}>
                <X size={14} /> Limpiar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="loading-state"><LoadingSpinner size="lg" /></div>
      ) : products.length === 0 ? (
        <div className="empty-state">
          <p>🧶 No encontramos productos con esos filtros.</p>
          {hasFilters && (
            <button className="btn btn-secondary btn-sm" onClick={clearFilters}>
              Ver todos los productos
            </button>
          )}
        </div>
      ) : (
        <div className="product-grid">
          {products.map(p => <ProductCard key={p.id} product={p} onView={setSelectedProduct} />)}
        </div>
      )}

      {/* Pagination */}
      {pages > 1 && (
        <div className="pagination">
          <button className="btn btn-ghost btn-sm" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>
            ← Anterior
          </button>
          <span className="page-info">{page} / {pages}</span>
          <button className="btn btn-ghost btn-sm" disabled={page >= pages} onClick={() => setPage(p => p + 1)}>
            Siguiente →
          </button>
        </div>
      )}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}
