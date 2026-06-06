import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart, formatPrice } from '../context/CartContext.jsx'

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, shipping, total, setQty, removeItem } = useCart()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="font-display text-xl font-semibold">
                Your bag{' '}
                <span className="text-ink-muted">({items.length})</span>
              </h2>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 hover:bg-blush-100"
                aria-label="Close cart"
              >
                <CloseIcon />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-blush-100">
                  <span className="text-3xl">🛍️</span>
                </div>
                <p className="text-ink-soft">Your bag is feeling light.</p>
                <Link to="/shop" onClick={onClose} className="btn-blush">
                  Start shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-4">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={item.key}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-4 border-b border-ink/5 py-4"
                      >
                        <div className="h-24 w-20 shrink-0 overflow-hidden rounded-2xl bg-blush-50">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-2">
                            <p className="font-medium leading-tight">{item.name}</p>
                            <button
                              onClick={() => removeItem(item.key)}
                              className="text-ink-muted hover:text-blush-500"
                              aria-label="Remove"
                            >
                              <CloseIcon small />
                            </button>
                          </div>
                          {item.size && (
                            <p className="mt-0.5 text-xs text-ink-muted">
                              Size {item.size}
                            </p>
                          )}
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <Stepper
                              qty={item.qty}
                              onMinus={() => setQty(item.key, item.qty - 1)}
                              onPlus={() => setQty(item.key, item.qty + 1)}
                            />
                            <p className="font-semibold">
                              {formatPrice(item.price * item.qty)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-ink/10 bg-white/50 px-6 py-5">
                  <Row label="Subtotal" value={formatPrice(subtotal)} />
                  <Row
                    label="Shipping"
                    value={shipping === 0 ? 'Free' : formatPrice(shipping)}
                  />
                  {shipping > 0 && (
                    <p className="mt-1 text-xs text-ink-muted">
                      Add {formatPrice(75 - subtotal)} more for free shipping.
                    </p>
                  )}
                  <div className="my-3 h-px bg-ink/10" />
                  <Row label="Total" value={formatPrice(total)} bold />
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="btn-primary mt-4 w-full"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function Stepper({ qty, onMinus, onPlus }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-ink/15 px-2 py-1">
      <button onClick={onMinus} className="h-6 w-6 text-lg leading-none text-ink-soft hover:text-ink">
        −
      </button>
      <span className="w-4 text-center text-sm font-semibold">{qty}</span>
      <button onClick={onPlus} className="h-6 w-6 text-lg leading-none text-ink-soft hover:text-ink">
        +
      </button>
    </div>
  )
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className={bold ? 'font-semibold' : 'text-ink-soft'}>{label}</span>
      <span className={bold ? 'text-lg font-bold' : 'font-medium'}>{value}</span>
    </div>
  )
}

function CloseIcon({ small }) {
  const s = small ? 16 : 18
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
