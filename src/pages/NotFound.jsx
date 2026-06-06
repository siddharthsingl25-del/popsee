import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'

export default function NotFound() {
  return (
    <Page>
      <div className="container-px grid min-h-[60vh] place-items-center text-center">
        <div>
          <p className="font-display text-8xl font-bold text-gradient">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold">
            This page wandered off.
          </h1>
          <p className="mt-3 text-ink-soft">
            Let's get you back to something soft.
          </p>
          <Link to="/" className="btn-blush mt-6">
            Back home
          </Link>
        </div>
      </div>
    </Page>
  )
}
