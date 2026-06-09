import { useState, useEffect } from 'react'
import { obtenerProducto } from '../api/products'

export function useProduct(id) {
  const [producto,  setProducto]  = useState(null)
  const [cargando,  setCargando]  = useState(true)
  const [error,     setError]     = useState(null)

  useEffect(() => {
    if (!id) return
    let cancelado = false

    const fetchData = async () => {
      setCargando(true)
      setError(null)
      try {
        const data = await obtenerProducto(id)
        if (!cancelado) setProducto(data)
      } catch (err) {
        if (!cancelado) setError(err)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    fetchData()
    return () => { cancelado = true }
  }, [id])

  return { producto, cargando, error }
}
