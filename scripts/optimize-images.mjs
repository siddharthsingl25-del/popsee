// Optimizes original product photos into fast, web-ready WebP files.
//
//   raw-images/*.{jpg,jpeg,png,webp}  ->  public/products/p1.webp, p2.webp, ...
//
// Each image is resized to a sensible max width and re-encoded as WebP, turning
// multi-MB originals into ~30–90KB files that load near-instantly. Files are
// processed in alphabetical order so naming them 1,2,3… controls the sequence.
//
// Run with:  npm run optimize:images
import { readdir, mkdir, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const SRC = 'raw-images'
const OUT = 'public/products'
const MAX_WIDTH = 1100 // plenty for a 4:5 product image on retina screens
const QUALITY = 80

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

async function run() {
  await mkdir(OUT, { recursive: true })

  const files = (await readdir(SRC))
    .filter((f) => exts.has(extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  if (files.length === 0) {
    console.log(`No images found in ${SRC}/ — add your files and re-run.`)
    return
  }

  console.log(`Optimizing ${files.length} image(s)…\n`)

  let i = 0
  for (const file of files) {
    i += 1
    const inPath = join(SRC, file)
    const outName = `p${i}.webp`
    const outPath = join(OUT, outName)

    await sharp(inPath)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath)

    const before = (await stat(inPath)).size
    const after = (await stat(outPath)).size
    const kb = (n) => `${(n / 1024).toFixed(0)}KB`
    console.log(
      `  ${file}  →  /products/${outName}   ${kb(before)} → ${kb(after)}  ` +
        `(-${Math.round((1 - after / before) * 100)}%)`,
    )
  }

  console.log(
    `\nDone. ${files.length} file(s) written to ${OUT}/ as p1…p${files.length}.webp`,
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
