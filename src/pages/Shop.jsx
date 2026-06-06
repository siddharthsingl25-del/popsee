import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Page from '../components/Page.jsx'
import Reveal, { stagger } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

const sorts = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || 'all'
  const [sort, setSort] = useState('featured')
  const [type, setType] = useState('all')

  // Reset type filter when category changes.
  useEffect(() => setType('all'), [category])

  const setCategory = (id) => {
    const next = new URLSearchParams(params)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setParams(next)
  }

  const types = useMemo(() => {
    const pool = products.filter((p) => category === 'all' || p.category === category)
    return ['all', ...Array.from(new Set(pool.map((p) => p.type)))]
  }, [category])

  const list = useMemo(() => {
    let l = products.filter((p) => category === 'all' || p.category === category)
    if (type !== 'all') l = l.filter((p) => p.type === type)
    switch (sort) {
      case 'price-asc':
        l = [...l].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        l = [...l].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        l = [...l].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return l
  }, [category, type, sort])

  return (
    <Page>
      {/* Header band */}
      <section className="relative overflow-hidden border-b border-ink/5 bg-gradient-to-br from-blush-100/60 to-sky-100/60">
        <div className="container-px py-14">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-blush-500">
              The collection
            </p>
            <h1 className="mt-2 font-display text-5xl font-semibold sm:text-6xl">
              {category === 'all'
                ? 'Everything soft'
                : category === 'women'
                  ? 'Women'
                  : 'Kids'}
            </h1>
            <p className="mt-3 max-w-lg text-ink-soft">
              {list.length} pieces, all made from naturally soft, responsibly
              sourced fabrics.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-px py-8">
        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`chip border transition ${
                  category === c.id
                    ? 'border-ink bg-ink text-cream'
                    : 'border-ink/15 bg-white/60 text-ink-soft hover:border-ink/40'
                }`}
              >
                {c.label}
              </button>
            ))}
            <span className="mx-1 hidden h-5 w-px bg-ink/10 sm:block" />
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`chip border transition ${
                  type === t
                    ? 'border-blush-400 bg-blush-200 text-ink'
                    : 'border-ink/10 bg-white/40 text-ink-muted hover:border-ink/30'
                }`}
              >
                {t === 'all' ? 'All types' : t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-ink-muted">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-medium outline-none focus:border-ink/40"
            >
              {sorts.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category + type + sort}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
          >
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </AnimatePresence>

        {list.length === 0 && (
          <p className="py-20 text-center text-ink-muted">
            Nothing here yet — try another filter.
          </p>
        )}
      </div>
    </Page>
  )
}
