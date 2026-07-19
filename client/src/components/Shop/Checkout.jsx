// client/src/components/Shop/Checkout.jsx
import { useState } from 'react'
import { CreditCard, Banknote, CheckCircle } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import orderService from '../../services/orderService'
import Modal from '../Common/Modal'
import './Checkout.css'

const METODOS = [
  { value: 'tarjeta',    label: 'Tarjeta de crédito/débito', icon: CreditCard },
  { value: 'transferencia', label: 'Transferencia bancaria', icon: Banknote },
  { value: 'efectivo', label: 'Pago contra entrega',    icon: Banknote },
]

export default function Checkout({ isOpen, onClose, onSuccess }) {
  const { items, total, clear } = useCart()
  const { user } = useAuth()
  const [metodo, setMetodo]   = useState('tarjeta')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [done, setDone]       = useState(false)
  const [cliente, setCliente] = useState({
    nombre: `${user?.nombre || ''} ${user?.apellido || ''}`.trim(),
    telefono: '',
    direccion: '',
  })

  const handleClienteChange = (e) => {
    const { name, value } = e.target
    setCliente(prev => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const validateCliente = () => {
    if (!cliente.nombre.trim() || cliente.nombre.trim().length < 2) {
      return 'Escribe el nombre de quien recibe el pedido.'
    }
    if (!cliente.telefono.trim() || cliente.telefono.trim().length < 7) {
      return 'Escribe un telefono valido para confirmar el pedido.'
    }
    if (!cliente.direccion.trim() || cliente.direccion.trim().length < 8) {
      return 'Escribe la direccion completa de entrega.'
    }
    return ''
  }

  const handleOrder = async () => {
    if (items.length === 0) {
      setError('Agrega al menos un producto antes de confirmar el pedido.')
      return
    }

    const validationError = validateCliente()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true); setError('')
    try {
      await orderService.create({
        cliente_nombre: cliente.nombre.trim(),
        cliente_telefono: cliente.telefono.trim(),
        cliente_direccion: cliente.direccion.trim(),
        metodo_pago: metodo,
        items: items.map(i => ({
          product_id: i.product_id,
          cantidad:   i.cantidad,
          precio_unitario: i.precio,
        })),
      })
      clear()
      setDone(true)
    } catch (e) {
      setError(e.response?.data?.error || 'Error al procesar el pedido')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setDone(false); setError(''); setMetodo('tarjeta')
    setCliente({
      nombre: `${user?.nombre || ''} ${user?.apellido || ''}`.trim(),
      telefono: '',
      direccion: '',
    })
    if (done) onSuccess(); else onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={done ? '¡Pedido realizado!' : 'Finalizar Pedido'}>
      {done ? (
        <div className="checkout-success">
          <CheckCircle size={56} className="success-icon" />
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu pedido ha sido recibido. Puedes ver el estado en <strong>Mis Pedidos</strong>.</p>
          <button className="btn btn-primary" onClick={handleClose}>Aceptar</button>
        </div>
      ) : (
        <>
          <div className="checkout-progress" aria-label="Progreso del pedido">
            <span className="active">1. Resumen</span>
            <span className="active">2. Entrega</span>
            <span>3. Pago</span>
          </div>
          {/* Resumen */}
          <div className="checkout-summary">
            <h4>Resumen del pedido</h4>
            {items.length === 0 ? (
              <p className="checkout-empty">No hay productos en el carrito.</p>
            ) : (
              items.map(i => (
                <div key={i.product_id} className="checkout-item">
                  <span>{i.nombre} × {i.cantidad}</span>
                  <span>${(i.precio * i.cantidad).toLocaleString('es-CO')}</span>
                </div>
              ))
            )}
            <div className="checkout-total">
              <strong>Total</strong>
              <strong>${total.toLocaleString('es-CO')}</strong>
            </div>
          </div>

          <h4 className="checkout-section-title">Datos de entrega</h4>
          <p className="checkout-helper">Estos datos permiten registrar el pedido y verlo después en el panel administrativo.</p>
          <div className="checkout-customer">
            <div className="form-group">
              <label>Nombre de quien recibe *</label>
              <input
                name="nombre"
                value={cliente.nombre}
                onChange={handleClienteChange}
                placeholder="Nombre completo"
                disabled={loading}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Telefono *</label>
                <input
                  name="telefono"
                  value={cliente.telefono}
                  onChange={handleClienteChange}
                  placeholder="Ej: 3219068824"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Direccion *</label>
                <input
                  name="direccion"
                  value={cliente.direccion}
                  onChange={handleClienteChange}
                  placeholder="Barrio, calle, numero"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Método de pago */}
          <h4 className="checkout-section-title">Método de pago</h4>
          <div className="metodo-list">
            {METODOS.map(m => {
              const Icon = m.icon
              return (
                <label key={m.value} className={`metodo-option ${metodo === m.value ? 'selected' : ''}`}>
                  <input
                    type="radio" name="metodo" value={m.value}
                    checked={metodo === m.value}
                    onChange={() => setMetodo(m.value)}
                  />
                  <Icon size={18} />
                  <span>{m.label}</span>
                </label>
              )
            })}
          </div>

          {error && <p className="alert alert-error">{error}</p>}

          <div className="modal-actions">
            <button className="btn btn-ghost" onClick={onClose} disabled={loading}>Cancelar</button>
            <button className="btn btn-primary" onClick={handleOrder} disabled={loading}>
              {loading ? 'Procesando…' : `Confirmar pedido · $${total.toLocaleString('es-CO')}`}
            </button>
          </div>
        </>
      )}
    </Modal>
  )
}
