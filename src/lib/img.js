// Lightweight image optimization.
// Unsplash URLs already carry sizing/quality params, so we pass them through.
// Everything else (e.g. full-resolution ibb.co uploads) is routed through the
// weserv.nl image CDN, which resizes and re-encodes to WebP on the fly — this
// turns multi-MB originals into fast, lazy-loadable images.
export function cdn(url, w = 800) {
  if (!url) return url
  // Local / self-hosted assets are already optimized — serve them directly.
  if (!/^https?:\/\//.test(url)) return url
  if (url.includes('images.unsplash.com')) return url
  const stripped = url.replace(/^https?:\/\//, '')
  return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}&w=${w}&q=78&output=webp`
}
