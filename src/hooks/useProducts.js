// ─────────────────────────────────────────────────────────────────────────────
// hooks/useProducts.js
//
// Hook que encapsula el fetch de productos con estado de carga y error.
// Recarga automáticamente cuando cambian los filtros.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { obtenerProductos } from '../api/products'

export function useProducts({ page = 1, perPage = 12, busqueda = '', categoria = '' } = {}) {
  const [productos,    setProductos]    = useState([])
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [cargando,     setCargando]     = useState(true)
  const [error,        setError]        = useState(null)

  useEffect(() => {
    let cancelado = false

    const fetchData = async () => {
      setCargando(true)
      setError(null)
      try {
        const { productos: data, totalPaginas: total } = await obtenerProductos({
          page, perPage, busqueda, categoria,
        })
        if (!cancelado) {
          setProductos(data)
          setTotalPaginas(total)
        }
      } catch (err) {
        if (!cancelado) setError(err)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    fetchData()
    return () => { cancelado = true }
  }, [page, perPage, busqueda, categoria])

  return { productos, totalPaginas, cargando, error }
}
