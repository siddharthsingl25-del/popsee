import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'popsee-cart-v1'

const lineKey = (id, size) => `${id}__${size || 'one'}`

function init() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { items: [] }
  } catch {
    return { items: [] }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, size, qty = 1 } = action
      const key = lineKey(product.id, size)
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: Math.min(i.qty + qty, 99) } : i,
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            size: size || null,
            qty,
          },
        ],
      }
    }
    case 'SET_QTY':
      return {
        items: state.items
          .map((i) => (i.key === action.key ? { ...i, qty: action.qty } : i))
          .filter((i) => i.qty > 0),
      }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.key !== action.key) }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore quota errors */
    }
  }, [state])

  const value = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0)
    const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0)
    const shipping = subtotal > 0 && subtotal < 75 ? 6 : 0
    return {
      items: state.items,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      addItem: (product, size, qty) => dispatch({ type: 'ADD', product, size, qty }),
      setQty: (key, qty) => dispatch({ type: 'SET_QTY', key, qty }),
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
