import { Link } from 'react-router-dom'
import { useState } from 'react'

const groups = [
  {
    title: 'Shop',
    links: [
      { label: 'Women', to: '/shop?category=women' },
      { label: 'Kids', to: '/shop?category=kids' },
      { label: 'New arrivals', to: '/shop' },
      { label: 'Bestsellers', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', to: '/about' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Stores', to: '/about' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/about' },
      { label: 'Returns', to: '/about' },
      { label: 'Size guide', to: '/about' },
      { label: 'Contact', to: '/about' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setDone(true)
      setEmail('')
    }
  }

  return (
    <footer className="mt-24 bg-ink text-cream">
      {/* Newsletter */}
      <div className="container-px py-16">
        <div className="grid items-center gap-10 rounded-4xl bg-gradient-to-br from-blush-300/20 to-sky-300/20 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="font-display text-3xl font-semibold md:text-4xl">
              Soft news, no spam.
            </h3>
            <p className="mt-3 max-w-md text-cream/70">
              Join the popsee list for early access to drops, 10% off your first
              order, and the occasional good idea.
            </p>
          </div>
          <form onSubmit={submit} className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setDone(false)
              }}
              placeholder="you@email.com"
              className="w-full rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-cream placeholder:text-cream/40 outline-none focus:border-blush-300"
            />
            <button className="btn-blush whitespace-nowrap">
              {done ? 'Welcome 🎉' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="container-px grid gap-10 border-t border-cream/10 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blush-300 to-sky-300 font-display text-lg font-bold text-ink">
              p
            </span>
            <span className="font-display text-2xl font-semibold">popsee</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-cream/60">
            Clean, sober, beautifully soft clothing for women and kids.
            Thoughtfully made everyday essentials.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-cream/50">
              {g.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/80 transition hover:text-blush-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-px flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-sm text-cream/50 sm:flex-row">
        <p>© {new Date().getFullYear()} popsee. Made with care.</p>
        <p>Free shipping over $75 · Easy 30-day returns</p>
      </div>
    </footer>
  )
}
