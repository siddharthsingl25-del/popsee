import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Page from '../components/Page.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCart, formatPrice } from '../context/CartContext.jsx'

export default function Checkout() {
  const { items, subtotal, shipping, total, clear } = useCart()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    card: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const placeOrder = (e) => {
    e.preventDefault()
    setPlaced(true)
    clear()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (placed) {
    return (
      <Page>
        <div className="container-px grid min-h-[60vh] place-items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
              className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-blush-300 to-sky-300"
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#2A2433" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <h1 className="mt-8 font-display text-4xl font-semibold sm:text-5xl">
              Order placed — thank you!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-ink-soft">
              A confirmation is on its way to your inbox. Your soft new pieces
              will be carefully packed and shipped within 1–2 days.
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Continue shopping
            </Link>
          </motion.div>
        </div>
      </Page>
    )
  }

  if (items.length === 0) {
    return (
      <Page>
        <div className="container-px grid min-h-[55vh] place-items-center text-center">
          <div>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-blush-100 text-3xl">
              🛍️
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold">
              Your bag is empty
            </h1>
            <p className="mt-3 text-ink-soft">Let's find something soft for you.</p>
            <Link to="/shop" className="btn-blush mt-6">
              Browse the collection
            </Link>
          </div>
        </div>
      </Page>
    )
  }

  return (
    <Page>
      <div className="container-px py-10">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Checkout</h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <form onSubmit={placeOrder} className="space-y-8">
            <Section title="Contact">
              <Field label="Email" value={form.email} onChange={set('email')} type="email" placeholder="you@email.com" />
            </Section>

            <Section title="Shipping address">
              <Field label="Full name" value={form.name} onChange={set('name')} placeholder="Ada Lovelace" />
              <Field label="Address" value={form.address} onChange={set('address')} placeholder="123 Soft Lane" full />
              <div className="grid grid-cols-2 gap-4">
                <Field label="City" value={form.city} onChange={set('city')} placeholder="London" />
                <Field label="Postcode" value={form.zip} onChange={set('zip')} placeholder="SW1A 1AA" />
              </div>
            </Section>

            <Section title="Payment">
              <Field
                label="Card number"
                value={form.card}
                onChange={set('card')}
                placeholder="4242 4242 4242 4242"
                full
              />
              <p className="text-xs text-ink-muted">
                This is a demo store — no real payment is taken.
              </p>
            </Section>

            <button type="submit" className="btn-primary w-full py-4 text-base">
              Place order · {formatPrice(total)}
            </button>
          </form>

          {/* Summary */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-4xl border border-ink/10 bg-white/60 p-6">
              <h2 className="font-display text-xl font-semibold">Order summary</h2>
              <div className="mt-5 space-y-4">
                {items.map((i) => (
                  <div key={i.key} className="flex gap-3">
                    <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl bg-blush-50">
                      <img src={i.image} alt={i.name} className="h-full w-full object-cover" />
                      <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-ink px-1 text-[11px] font-bold text-cream">
                        {i.qty}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-tight">{i.name}</p>
                        {i.size && <p className="text-xs text-ink-muted">Size {i.size}</p>}
                      </div>
                      <p className="text-sm font-semibold">{formatPrice(i.price * i.qty)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-5 h-px bg-ink/10" />
              <SummaryRow label="Subtotal" value={formatPrice(subtotal)} />
              <SummaryRow label="Shipping" value={shipping === 0 ? 'Free' : formatPrice(shipping)} />
              <div className="my-3 h-px bg-ink/10" />
              <SummaryRow label="Total" value={formatPrice(total)} bold />

              <div className="mt-5 rounded-2xl bg-sky-100/60 p-4 text-xs text-ink-soft">
                🔒 Secure checkout · We never store card details.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Page>
  )
}

function Section({ title, children }) {
  return (
    <div className="rounded-4xl border border-ink/10 bg-white/50 p-6">
      <h2 className="mb-4 font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Field({ label, full, ...props }) {
  return (
    <label className={`block ${full ? 'w-full' : ''}`}>
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      <input
        required
        {...props}
        className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none transition focus:border-blush-400 focus:ring-4 focus:ring-blush-100"
      />
    </label>
  )
}

function SummaryRow({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between py-0.5">
      <span className={bold ? 'font-semibold' : 'text-ink-soft'}>{label}</span>
      <span className={bold ? 'text-xl font-bold' : 'font-medium'}>{value}</span>
    </div>
  )
}
