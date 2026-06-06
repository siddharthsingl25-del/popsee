import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=women', label: 'Women' },
  { to: '/shop?category=kids', label: 'Kids' },
  { to: '/about', label: 'About' },
]

export default function Navbar({ onCartClick }) {
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_rgba(42,36,51,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blush-300 to-sky-300 text-ink shadow-soft">
            <span className="font-display text-lg font-bold">p</span>
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-float rounded-full bg-blush-400" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            popsee
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `link-underline text-sm font-medium transition-colors ${
                    isActive && l.to === location.pathname + location.search
                      ? 'text-ink'
                      : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCartClick}
            className="group relative grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 backdrop-blur transition hover:border-ink/30"
            aria-label="Open cart"
          >
            <BagIcon />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-blush-400 px-1 text-[11px] font-bold text-ink"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 backdrop-blur md:hidden"
            aria-label="Menu"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/5 bg-cream/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-blush-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink">
      <path
        d="M6 7h12l-1 13H7L6 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 7a3 3 0 1 1 6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BurgerIcon({ open }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
          open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-ink transition-all duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
          open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
        }`}
      />
    </div>
  )
}
