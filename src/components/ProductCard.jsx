import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerItem } from './Reveal.jsx'
import { useCart, formatPrice } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const quickAdd = (e) => {
    e.preventDefault()
    addItem(product, product.sizes[0], 1)
  }

  return (
    <motion.div variants={staggerItem}>
      <Link to={`/product/${product.id}`} className="group block">
        <div className="card-shine relative aspect-[4/5] overflow-hidden rounded-4xl bg-blush-50">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {product.badge && (
            <span
              className={`chip absolute left-3 top-3 ${
                product.badge === 'New'
                  ? 'bg-sky-300 text-ink'
                  : 'bg-ink text-cream'
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={quickAdd}
              className="w-full rounded-full bg-white/90 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur transition hover:bg-ink hover:text-cream"
            >
              Quick add
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-ink-muted">
              {product.type}
            </p>
            <h3 className="mt-0.5 truncate font-display text-lg font-medium text-ink">
              {product.name}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              {product.colors.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="h-3.5 w-3.5 rounded-full ring-1 ring-ink/10"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <p className="shrink-0 font-semibold text-ink">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
