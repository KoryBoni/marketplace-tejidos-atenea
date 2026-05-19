// client/src/components/Admin/OrderManager.jsx
import { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Search } from 'lucide-react'
import orderService from '../../services/orderService'
import LoadingSpinner from '../Common/LoadingSpinner'

const ESTADOS = ['pendiente', 'confirmado', 'enviado', 'entregado', 'cancelado']

const BADGE = {
  pendiente: 'badge-amber',
  confirmado: 'badge-primary',
  enviado: 'badge-sage',
  entregado: 'badge-success',
  cancelado: 'badge-danger',
}

export default function OrderManager() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [estado, setEstado] = useState('')
  const [message, setMessage] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const d = await orderService.getAll(estado ? { estado } : {})
      setOrders(d.orders || d)
    } catch {
      setMessage('No se pudieron cargar los pedidos.')
    } finally { setLoading(false) }
  }, [estado])

  useEffect(() => { load() }, [load])

  const changeEstado = async (id, estado) => {
    setMessage('')
    try {
      await orderService.updateEstado(id, estado)
      setMessage('Estado del pedido actualizado correctamente.')
      load()
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error al actualizar estado.')
    }
  }

  return (
    <div className="product-list-panel">
      <div className="panel-header">
        <h2>Pedidos</h2>
        <div className="panel-header-actions">
          <label className="admin-filter">
            <Search size={15} />
            <select value={estado} onChange={e => setEstado(e.target.value)}>
              <option value="">Todos los estados</option>
              {ESTADOS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <button className="btn btn-ghost btn-sm" onClick={load}><RefreshCw size={15} /></button>
        </div>
      </div>

      {message && (
        <p className={`alert ${message.includes('correctamente') ? 'alert-success' : 'alert-error'}`}>
          {message}
        </p>
      )}

      {loading ? <LoadingSpinner fullPage /> : orders.length === 0 ? (
        <div className="empty-state"><p>No hay pedidos para mostrar.</p></div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>#</th><th>Cliente</th><th>Entrega</th><th>Productos</th><th>Total</th><th>Pago</th><th>Estado</th><th>Fecha</th></tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td style={{ fontSize: '.85rem' }}>
                    <p style={{ fontWeight: 600, margin: 0 }}>{o.cliente_nombre}</p>
                    <p style={{ color: 'var(--ink-soft)', margin: 0 }}>{o.cliente_email}</p>
                  </td>
                  <td style={{ fontSize: '.82rem', minWidth: 190 }}>
                    <p style={{ margin: 0 }}>{o.cliente_telefono}</p>
                    <p style={{ color: 'var(--ink-soft)', margin: 0 }}>{o.cliente_direccion}</p>
                  </td>
                  <td style={{ fontSize: '.82rem', minWidth: 180 }}>
                    {o.items?.map(item => (
                      <p key={`${o.id}-${item.product_id}`} style={{ margin: 0 }}>
                        {item.cantidad} x {item.nombre}
                      </p>
                    ))}
                  </td>
                  <td>${Number(o.total).toLocaleString('es-CO')}</td>
                  <td style={{ fontSize: '.82rem', color: 'var(--ink-mid)' }}>{o.metodo_pago}</td>
                  <td>
                    <span className={`badge ${BADGE[o.estado] || 'badge-primary'} order-status-badge`}>
                      {o.estado}
                    </span>
                    <select
                      className="estado-select"
                      value={o.estado}
                      onChange={e => changeEstado(o.id, e.target.value)}
                    >
                      {ESTADOS
                        .filter(s => {
                          if (o.estado === 'cancelado' || o.estado === 'entregado') return s === o.estado
                          return true
                        })
                        .map(s => <option key={s} value={s}>{s}</option>)
                      }
                    </select>
                  </td>
                  <td style={{ fontSize: '.78rem', color: 'var(--ink-soft)' }}>
                    {new Date(o.created_at).toLocaleDateString('es-CO')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
