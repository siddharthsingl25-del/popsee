import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Page from '../components/Page.jsx'
import Reveal, { stagger } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Marquee from '../components/Marquee.jsx'
import { featured, newArrivals, products } from '../data/products.js'

export default function Home() {
  return (
    <Page>
      <Hero />
      <MarqueeStrip />
      <Collections />
      <FeaturedRow title="Bestsellers" subtitle="Loved on repeat" items={featured} />
      <Story />
      <FeaturedRow title="Just in" subtitle="Fresh arrivals" items={newArrivals.length ? newArrivals : products.slice(0, 4)} />
      <ValueProps />
    </Page>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blush-300/50 blur-3xl" />
        <div className="absolute -right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-sky-300/50 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-10 pb-10 pt-12 md:grid-cols-2 md:pt-20">
        <motion.div style={{ opacity: fade }} className="relative z-10">
          <Reveal>
            <span className="chip bg-white/70 text-ink-soft shadow-soft backdrop-blur">
              ✨ New season · soft essentials
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Softness,
              <br />
              <span className="text-gradient">made simple.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Clean, sober, beautifully made clothing for women and little ones.
              The quiet pieces you'll reach for every single day.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">
                Shop the collection
              </Link>
              <Link to="/shop?category=kids" className="btn-ghost">
                Explore kids
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center gap-6 text-sm text-ink-soft">
              <Stat n="12k+" l="happy families" />
              <span className="h-8 w-px bg-ink/10" />
              <Stat n="100%" l="organic cotton" />
              <span className="h-8 w-px bg-ink/10" />
              <Stat n="4.9★" l="avg. rating" />
            </div>
          </Reveal>
        </motion.div>

        {/* Image collage with parallax */}
        <div className="relative h-[420px] sm:h-[520px]">
          <motion.div
            style={{ y: y1 }}
            className="card-shine absolute right-0 top-0 h-[78%] w-[64%] overflow-hidden rounded-4xl bg-blush-100 shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
              alt="Woman in soft knit dress"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="card-shine absolute bottom-0 left-0 h-[58%] w-[52%] overflow-hidden rounded-4xl bg-sky-100 shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80"
              alt="Child in soft dungarees"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 right-4 grid h-24 w-24 place-items-center rounded-full bg-cream text-center shadow-soft"
          >
            <div>
              <p className="font-display text-xl font-bold leading-none">10%</p>
              <p className="text-[10px] uppercase tracking-wider text-ink-muted">
                first order
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, l }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-ink">{n}</p>
      <p className="text-xs text-ink-muted">{l}</p>
    </div>
  )
}

function MarqueeStrip() {
  return (
    <div className="border-y border-ink/10 bg-ink py-4 text-cream">
      <Marquee
        items={[
          'Organic cotton',
          'Free shipping over $75',
          'Made to last',
          'Gentle on skin',
          'Easy 30-day returns',
          'Designed in soft tones',
        ]}
      />
    </div>
  )
}

function Collections() {
  const cards = [
    {
      to: '/shop?category=women',
      title: 'Women',
      copy: 'Quietly elegant essentials',
      img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80',
      tint: 'from-blush-300/40',
    },
    {
      to: '/shop?category=kids',
      title: 'Kids',
      copy: 'Soft, sturdy & ready to play',
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
      tint: 'from-sky-300/40',
    },
  ]
  return (
    <section className="container-px py-20">
      <Reveal className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blush-500">
            Shop by
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            Two worlds, one soft promise
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <Link
              to={c.to}
              className="card-shine group relative block h-[360px] overflow-hidden rounded-4xl sm:h-[440px]"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${c.tint} via-transparent to-transparent`}
              />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <h3 className="font-display text-3xl font-semibold drop-shadow">
                  {c.title}
                </h3>
                <p className="mt-1 text-cream/90 drop-shadow">{c.copy}</p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/90 px-5 py-2.5 text-sm font-semibold text-ink transition group-hover:gap-3">
                  Shop now <span>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeaturedRow({ title, subtitle, items }) {
  return (
    <section className="container-px py-12">
      <Reveal className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blush-500">
            {subtitle}
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            {title}
          </h2>
        </div>
        <Link to="/shop" className="link-underline hidden text-sm font-semibold sm:block">
          View all →
        </Link>
      </Reveal>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </motion.div>
    </section>
  )
}

function Story() {
  return (
    <section className="container-px py-20">
      <div className="grid items-center gap-10 overflow-hidden rounded-4xl bg-gradient-to-br from-blush-100 to-sky-100 p-8 md:grid-cols-2 md:p-14">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-blush-500">
            The popsee way
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Less, but better — for the whole family.
          </h2>
          <p className="mt-5 max-w-md text-ink-soft">
            We design calm, considered pieces from naturally soft, responsibly
            sourced fabrics. No loud logos, no fast fashion — just clothes that
            feel as good as they look, season after season.
          </p>
          <Link to="/about" className="btn-blush mt-7">
            Our story
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1522771930-fbb47d8f06b6?auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1560506840-ec148e82a604?auto=format&fit=crop&w=500&q=80',
            ].map((src, i) => (
              <div
                key={src}
                className={`overflow-hidden rounded-3xl ${
                  i % 2 ? 'translate-y-5' : ''
                }`}
              >
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ValueProps() {
  const items = [
    { icon: '🌿', t: 'Organic & kind', d: 'GOTS-certified cotton, gentle on skin and the planet.' },
    { icon: '✂️', t: 'Made to last', d: 'Reinforced seams and timeless cuts that outlast trends.' },
    { icon: '🚚', t: 'Free over $75', d: 'Quick, carbon-neutral delivery to your door.' },
    { icon: '↩️', t: 'Easy returns', d: '30 days, no questions — softness should feel right.' },
  ]
  return (
    <section className="container-px py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((it) => (
          <Reveal key={it.t}>
            <div className="h-full rounded-3xl border border-ink/5 bg-white/60 p-6 transition hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-100 text-2xl">
                {it.icon}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{it.t}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  )
}
