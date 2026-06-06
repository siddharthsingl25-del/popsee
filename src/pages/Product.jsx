import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Page from '../components/Page.jsx'
import Reveal, { stagger } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { getProduct, products } from '../data/products.js'
import { useCart, formatPrice } from '../context/CartContext.jsx'

export default function Product({ onCartOpen }) {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()

  const [active, setActive] = useState(0)
  const [size, setSize] = useState(product?.sizes[0] || '')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <Page>
        <div className="container-px grid min-h-[50vh] place-items-center text-center">
          <div>
            <h1 className="font-display text-3xl font-semibold">Piece not found</h1>
            <Link to="/shop" className="btn-blush mt-6">
              Back to shop
            </Link>
          </div>
        </div>
      </Page>
    )
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAdd = () => {
    addItem(product, size, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
    onCartOpen?.()
  }

  return (
    <Page>
      <div className="container-px py-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-ink-muted">
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="capitalize hover:text-ink">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-ink">{product.type}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className="flex gap-3 sm:flex-col">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActive(i)}
                  className={`h-20 w-16 overflow-hidden rounded-2xl ring-2 transition sm:h-24 sm:w-20 ${
                    active === i ? 'ring-blush-400' : 'ring-transparent hover:ring-ink/20'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="card-shine relative flex-1 overflow-hidden rounded-4xl bg-blush-50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={gallery[active]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <Reveal>
              {product.badge && (
                <span className="chip bg-blush-200 text-ink">{product.badge}</span>
              )}
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <Stars rating={product.rating} />
                <span className="text-sm text-ink-muted">
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>
              <p className="mt-5 text-3xl font-semibold">
                {formatPrice(product.price)}
              </p>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                {product.description}
              </p>
            </Reveal>

            {/* Colors */}
            <Reveal delay={0.05}>
              <div className="mt-8">
                <p className="text-sm font-semibold">Colour</p>
                <div className="mt-3 flex gap-2.5">
                  {product.colors.map((c) => (
                    <span
                      key={c}
                      className="h-9 w-9 rounded-full ring-1 ring-ink/10"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Sizes */}
            <Reveal delay={0.1}>
              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Size</p>
                  <button className="text-sm text-ink-muted underline-offset-2 hover:underline">
                    Size guide
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[3rem] rounded-2xl border px-4 py-2.5 text-sm font-semibold transition ${
                        size === s
                          ? 'border-ink bg-ink text-cream'
                          : 'border-ink/15 bg-white/60 hover:border-ink/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Add to cart */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex gap-3">
                <button onClick={handleAdd} className="btn-primary flex-1 sm:flex-none sm:px-12">
                  <AnimatePresence mode="wait" initial={false}>
                    {added ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        Added ✓
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        Add to bag · {formatPrice(product.price)}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button className="btn-ghost" aria-label="Save to wishlist">
                  <HeartIcon />
                </button>
              </div>
            </Reveal>

            {/* Perks */}
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-2.5 border-t border-ink/10 pt-6 text-sm text-ink-soft">
                {[
                  'Free carbon-neutral shipping over $75',
                  'Easy 30-day returns',
                  'GOTS-certified organic cotton',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <CheckIcon /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20">
            <Reveal>
              <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
                You might also love
              </h2>
            </Reveal>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
            >
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </Page>
  )
}

function Stars({ rating }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" className="text-blush-400">
          <path
            fill={i <= Math.round(rating) ? 'currentColor' : 'rgba(42,36,51,0.12)'}
            d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z"
          />
        </svg>
      ))}
    </div>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20s-7-4.35-7-9a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 4.65-7 9-7 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-200">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#2A2433" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
