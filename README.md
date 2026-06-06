# popsee 🌸

Clean, sober, beautifully soft clothing for **women and kids**. A modern,
animated e-commerce storefront built with React, Vite, Tailwind CSS and
Framer Motion.

> Brand palette: blush `#FFBBE7` · sky `#BDE0FE`

## ✨ Features

- **Full shopping experience** — catalog with category/type filters and sorting,
  product detail pages with gallery, size & colour selection, a working cart
  (add / remove / quantity) and a complete checkout flow with order confirmation.
- **Cart persistence** — your bag is saved to `localStorage`, so it survives
  refreshes.
- **Sleek, modern animations** — parallax hero, scroll-reveal sections,
  staggered product grids, an animated slide-in cart drawer, page transitions
  and micro-interactions, all powered by Framer Motion.
- **Responsive & clean** — mobile-first layout with a soft pastel design system.

## 🧱 Tech stack

| Purpose        | Tool                       |
| -------------- | -------------------------- |
| Framework      | React 18                   |
| Build tool     | Vite 5                     |
| Styling        | Tailwind CSS 3             |
| Animation      | Framer Motion 11           |
| Routing        | React Router 6             |

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 🗂️ Project structure

```
src/
├─ components/    Navbar, Footer, CartDrawer, ProductCard, Reveal, Marquee, Page
├─ context/       CartContext (cart state + localStorage persistence)
├─ data/          products.js (catalog: women & kids wear)
├─ pages/         Home, Shop, Product, Checkout, About, NotFound
├─ App.jsx        routes + layout
└─ main.jsx       entry
```

## 🛍️ Catalog

The store ships with a curated set of women's and kids' pieces in
`src/data/products.js`. Each product has multiple images, colours, sizes,
ratings and a description — add or edit entries there to change the catalog.

---

Made with care. Demo store — no real payments are processed.
