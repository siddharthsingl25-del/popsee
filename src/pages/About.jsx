import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Page from '../components/Page.jsx'
import Reveal, { stagger, staggerItem } from '../components/Reveal.jsx'

export default function About() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blush-300/40 blur-3xl" />
          <div className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />
        </div>
        <div className="container-px py-20 text-center">
          <Reveal>
            <span className="chip bg-white/70 text-ink-soft shadow-soft">Our story</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.08] sm:text-6xl">
              Soft clothes for a{' '}
              <span className="text-gradient">gentler everyday.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              popsee began with a simple wish: well-made, calm clothing that
              feels lovely on women and little ones alike — without the noise,
              the waste, or the price of fast fashion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image band */}
      <section className="container-px">
        <Reveal>
          <div className="card-shine relative h-[320px] overflow-hidden rounded-4xl sm:h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80"
              alt="Soft, considered clothing"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="container-px py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            {
              t: 'Considered design',
              d: 'We design slowly, in soft tones and timeless cuts, so each piece earns its place in your wardrobe for years.',
            },
            {
              t: 'Honest materials',
              d: 'GOTS-certified organic cotton, responsible wool and low-impact dyes — gentle on skin and on the planet.',
            },
            {
              t: 'Made fairly',
              d: 'We partner with family-run workshops that pay fair wages and treat their makers with care.',
            },
          ].map((v) => (
            <motion.div
              key={v.t}
              variants={staggerItem}
              className="rounded-4xl border border-ink/5 bg-white/60 p-8 transition hover:shadow-soft"
            >
              <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
              <p className="mt-3 text-ink-soft">{v.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Numbers */}
      <section className="container-px">
        <div className="grid gap-6 rounded-4xl bg-gradient-to-br from-blush-100 to-sky-100 p-10 text-center sm:grid-cols-3 md:p-14">
          {[
            { n: '12,000+', l: 'happy families dressed' },
            { n: '100%', l: 'organic & responsible cotton' },
            { n: 'Carbon-neutral', l: 'shipping on every order' },
          ].map((s) => (
            <Reveal key={s.l}>
              <p className="font-display text-4xl font-bold sm:text-5xl">{s.n}</p>
              <p className="mt-2 text-ink-soft">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px py-20 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Come find your soft.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Explore the collection and discover the quiet pieces you'll reach for
            every day.
          </p>
          <Link to="/shop" className="btn-primary mt-8">
            Shop the collection
          </Link>
        </Reveal>
      </section>
    </Page>
  )
}
