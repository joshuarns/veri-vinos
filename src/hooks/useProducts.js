// ─────────────────────────────────────────────────────────────────────────────
// hooks/useProducts.js
//
// Hook que carga el catálogo completo (opcionalmente por categoría) con estado
// de carga y error. Recarga automáticamente cuando cambia la categoría.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { obtenerCatalogo } from '../api/products'

export function useProducts({ categoria = '' } = {}) {
  const [productos, setProductos] = useState([])
  const [cargando,  setCargando]  = useState(true)
  const [error,     setError]     = useState(null)

  useEffect(() => {
    let cancelado = false

    const fetchData = async () => {
      setCargando(true)
      setError(null)
      try {
        const data = await obtenerCatalogo({ categoria })
        if (!cancelado) setProductos(data)
      } catch (err) {
        if (!cancelado) setError(err)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    fetchData()
    return () => { cancelado = true }
  }, [categoria])

  return { productos, cargando, error }
}
