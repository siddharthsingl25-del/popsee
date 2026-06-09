import { useState } from 'react'

// Image with an instant shimmer placeholder + fade-in, and a graceful
// fallback to the original URL if the optimized (CDN) source fails to load.
// The PARENT element must be `position: relative` and `overflow-hidden`.
export default function SmartImage({
  src,
  fallback,
  alt = '',
  className = '',
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(src)

  return (
    <>
      {!loaded && (
        <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-blush-100 via-cream to-sky-100" />
      )}
      <img
        src={current}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => {
          // If the optimized source fails, fall back to the original once.
          if (fallback && current !== fallback) setCurrent(fallback)
        }}
        className={`${className} transition-opacity duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  )
}
