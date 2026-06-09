// popsee catalog — soft, clean essentials for women & kids.
// Images are sourced from Unsplash (stable photo CDN URLs).

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const products = [
  // ───────────────────────── FEATURED ─────────────────────────
  {
    id: 'xyz-test',
    name: 'xyz test',
    category: 'women',
    type: 'Dresses',
    price: 72,
    rating: 4.9,
    reviews: 64,
    badge: 'New',
    colors: ['#FFBBE7', '#BDE0FE', '#FFFCF9'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: 'https://i.ibb.co/B5psBVCn/1-jpg-1.jpg',
    gallery: [
      'https://i.ibb.co/B5psBVCn/1-jpg-1.jpg',
      'https://i.ibb.co/ynRRKmsq/2-jpg.jpg',
      'https://i.ibb.co/ZzynPzyr/3-jpg-2.jpg',
      'https://i.ibb.co/RTc7Hmvh/4-jpg-1.jpg',
      'https://i.ibb.co/bYHcydL/5-jpg.jpg',
    ],
    description:
      'A soft, considered everyday piece in calm popsee tones. Beautifully made from naturally soft fabric for an easy, all-day feel.',
  },
  // ───────────────────────── WOMEN ─────────────────────────
  {
    id: 'w-linen-shirt',
    name: 'Soft Linen Oversized Shirt',
    category: 'women',
    type: 'Shirts',
    price: 58,
    rating: 4.8,
    reviews: 214,
    badge: 'Bestseller',
    colors: ['#FFBBE7', '#FFFCF9', '#BDE0FE'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: img('1596755094514-f87e34085b2c'),
    gallery: [
      img('1596755094514-f87e34085b2c'),
      img('1551488831-00ddcb6c6bd3'),
      img('1485462537746-965f33f7f6a7'),
    ],
    description:
      'Breathable European linen cut a touch oversized for everyday ease. Mother-of-pearl buttons and a relaxed drape that softens with every wash.',
  },
  {
    id: 'w-knit-dress',
    name: 'Cloud Knit Midi Dress',
    category: 'women',
    type: 'Dresses',
    price: 86,
    rating: 4.9,
    reviews: 168,
    badge: 'New',
    colors: ['#BDE0FE', '#FFBBE7', '#2A2433'],
    sizes: ['XS', 'S', 'M', 'L'],
    image: img('1595777457583-95e059d581b8'),
    gallery: [
      img('1595777457583-95e059d581b8'),
      img('1539008835657-9e8e9680c956'),
      img('1572804013309-59a88b7e92f1'),
    ],
    description:
      'A weightless ribbed knit that skims and never clings. Falls just below the knee — easy from desk to dinner.',
  },
  {
    id: 'w-wide-trouser',
    name: 'Tailored Wide-Leg Trouser',
    category: 'women',
    type: 'Trousers',
    price: 74,
    rating: 4.7,
    reviews: 132,
    colors: ['#2A2433', '#BDE0FE', '#FFFCF9'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: img('1594633312681-425c7b97ccd1'),
    gallery: [
      img('1594633312681-425c7b97ccd1'),
      img('1551803091-e20673f15770'),
      img('1602573991155-21f0143bb45c'),
    ],
    description:
      'High-rise, fluid wide leg with a clean front. A pressed crease keeps it sharp; an elastic back keeps it kind.',
  },
  {
    id: 'w-cardigan',
    name: 'Featherweight Wool Cardigan',
    category: 'women',
    type: 'Knitwear',
    price: 92,
    rating: 4.9,
    reviews: 201,
    badge: 'Bestseller',
    colors: ['#FFBBE7', '#FFFCF9', '#BDE0FE'],
    sizes: ['S', 'M', 'L'],
    image: img('1576566588028-4147f3842f27'),
    gallery: [
      img('1576566588028-4147f3842f27'),
      img('1515886657613-9f3515b0c78f'),
      img('1434389677669-e08b4cac3105'),
    ],
    description:
      'Merino-blend cardigan light enough to layer year-round. Pearl buttons, ribbed cuffs and a softly cropped hem.',
  },
  {
    id: 'w-tee',
    name: 'Everyday Organic Cotton Tee',
    category: 'women',
    type: 'Tops',
    price: 28,
    rating: 4.6,
    reviews: 389,
    colors: ['#FFFCF9', '#FFBBE7', '#BDE0FE', '#2A2433'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: img('1521572163474-6864f9cf17ab'),
    gallery: [
      img('1521572163474-6864f9cf17ab'),
      img('1503341504253-dff4815485f1'),
      img('1583743814966-8936f5b7be1a'),
    ],
    description:
      'The tee you reach for first. GOTS-certified organic cotton with a clean crew neck and a length that tucks just right.',
  },
  {
    id: 'w-slip-skirt',
    name: 'Satin Bias Slip Skirt',
    category: 'women',
    type: 'Skirts',
    price: 64,
    rating: 4.7,
    reviews: 96,
    badge: 'New',
    colors: ['#BDE0FE', '#FFBBE7', '#2A2433'],
    sizes: ['XS', 'S', 'M', 'L'],
    image: img('1583496661160-fb5886a0aaaa'),
    gallery: [
      img('1583496661160-fb5886a0aaaa'),
      img('1564257631407-4deb1f99d992'),
      img('1490481651871-ab68de25d43d'),
    ],
    description:
      'Cut on the bias so it moves like water. A muted satin sheen that dresses up or down without trying.',
  },
  {
    id: 'w-blazer',
    name: 'Relaxed Cocoon Blazer',
    category: 'women',
    type: 'Outerwear',
    price: 128,
    rating: 4.8,
    reviews: 77,
    colors: ['#FFFCF9', '#2A2433', '#BDE0FE'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: img('1591047139829-d91aecb6caea'),
    gallery: [
      img('1591047139829-d91aecb6caea'),
      img('1507679799987-c73779587ccf'),
      img('1487222477894-8943e31ef7b2'),
    ],
    description:
      'A soft-shouldered blazer with a single button and a cocoon line. Structured enough for work, easy enough for weekends.',
  },
  {
    id: 'w-pajama',
    name: 'Brushed Cotton Lounge Set',
    category: 'women',
    type: 'Loungewear',
    price: 68,
    rating: 4.9,
    reviews: 145,
    badge: 'Bestseller',
    colors: ['#FFBBE7', '#BDE0FE', '#FFFCF9'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: img('1616627561950-9f746e330187'),
    gallery: [
      img('1616627561950-9f746e330187'),
      img('1591348122449-02525d70379b'),
      img('1487412947147-5cebf100ffc2'),
    ],
    description:
      'Sunday-morning softness in a brushed cotton set. Piped edges, a relaxed pant and a shirt that breathes.',
  },

  // ───────────────────────── KIDS ─────────────────────────
  {
    id: 'k-romper',
    name: 'Tiny Cloud Cotton Romper',
    category: 'kids',
    type: 'Rompers',
    price: 32,
    rating: 4.9,
    reviews: 312,
    badge: 'Bestseller',
    colors: ['#BDE0FE', '#FFBBE7', '#FFFCF9'],
    sizes: ['0-3m', '3-6m', '6-12m', '12-18m'],
    image: img('1522771930-fbb47d8f06b6'),
    gallery: [
      img('1522771930-fbb47d8f06b6'),
      img('1560506840-ec148e82a604'),
      img('1518831959646-742c3a14ebf7'),
    ],
    description:
      'Snap-bottom romper in the softest organic cotton, made for endless wriggles, naps and giggles.',
  },
  {
    id: 'k-dungaree',
    name: 'Little Explorer Dungarees',
    category: 'kids',
    type: 'Dungarees',
    price: 38,
    rating: 4.8,
    reviews: 188,
    badge: 'New',
    colors: ['#BDE0FE', '#FFBBE7', '#2A2433'],
    sizes: ['1-2y', '2-3y', '3-4y', '4-5y'],
    image: img('1518831959646-742c3a14ebf7'),
    gallery: [
      img('1518831959646-742c3a14ebf7'),
      img('1519457431-44ccd64a579b'),
      img('1471286174890-9c112ffca5b4'),
    ],
    description:
      'Adjustable straps, roomy knees and a front pocket for tiny treasures. Built for puddles and playgrounds.',
  },
  {
    id: 'k-dress',
    name: 'Twirl-Ready Pinafore Dress',
    category: 'kids',
    type: 'Dresses',
    price: 36,
    rating: 4.9,
    reviews: 144,
    colors: ['#FFBBE7', '#BDE0FE', '#FFFCF9'],
    sizes: ['1-2y', '2-3y', '3-4y', '4-5y', '5-6y'],
    image: img('1518621736915-f3b1c41bfd00'),
    gallery: [
      img('1518621736915-f3b1c41bfd00'),
      img('1503944168849-8bf86875bbd8'),
      img('1471286174890-9c112ffca5b4'),
    ],
    description:
      'A swishy pinafore with a hidden twirl. Pairs over a tee in winter, on its own in summer.',
  },
  {
    id: 'k-tee-set',
    name: 'Comfy Play Tee & Short Set',
    category: 'kids',
    type: 'Sets',
    price: 30,
    rating: 4.7,
    reviews: 267,
    badge: 'Bestseller',
    colors: ['#BDE0FE', '#FFBBE7', '#FFFCF9', '#2A2433'],
    sizes: ['1-2y', '2-3y', '3-4y', '4-5y'],
    image: img('1471286174890-9c112ffca5b4'),
    gallery: [
      img('1471286174890-9c112ffca5b4'),
      img('1503454537195-1dcabb73ffb9'),
      img('1522771930-fbb47d8f06b6'),
    ],
    description:
      'A mix-and-match set that survives the wash pile. Soft jersey tee with an elastic-waist short for all-day play.',
  },
  {
    id: 'k-cardigan',
    name: 'Cozy Button Knit Cardigan',
    category: 'kids',
    type: 'Knitwear',
    price: 42,
    rating: 4.8,
    reviews: 121,
    badge: 'New',
    colors: ['#FFBBE7', '#BDE0FE', '#FFFCF9'],
    sizes: ['1-2y', '2-3y', '3-4y', '4-5y'],
    image: img('1503454537195-1dcabb73ffb9'),
    gallery: [
      img('1503454537195-1dcabb73ffb9'),
      img('1560506840-ec148e82a604'),
      img('1519457431-44ccd64a579b'),
    ],
    description:
      'A gently chunky knit with wooden buttons. Warm without the itch — layers over everything.',
  },
  {
    id: 'k-overall',
    name: 'Soft Stretch Jogger Set',
    category: 'kids',
    type: 'Sets',
    price: 34,
    rating: 4.6,
    reviews: 98,
    colors: ['#BDE0FE', '#2A2433', '#FFBBE7'],
    sizes: ['2-3y', '3-4y', '4-5y', '5-6y'],
    image: img('1560506840-ec148e82a604'),
    gallery: [
      img('1560506840-ec148e82a604'),
      img('1503944168849-8bf86875bbd8'),
      img('1518831959646-742c3a14ebf7'),
    ],
    description:
      'Brushed-back joggers with a matching crew. Stretchy cuffs and a soft waistband for comfy, busy days.',
  },
  {
    id: 'k-sunhat',
    name: 'Reversible Sun Hat',
    category: 'kids',
    type: 'Accessories',
    price: 18,
    rating: 4.9,
    reviews: 203,
    colors: ['#FFBBE7', '#BDE0FE', '#FFFCF9'],
    sizes: ['S', 'M', 'L'],
    image: img('1519457431-44ccd64a579b'),
    gallery: [
      img('1519457431-44ccd64a579b'),
      img('1522771930-fbb47d8f06b6'),
      img('1471286174890-9c112ffca5b4'),
    ],
    description:
      'Two looks in one — flip it for a fresh print. A wide brim and chin tie keep the sun (and fuss) away.',
  },
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'women', label: 'Women' },
  { id: 'kids', label: 'Kids' },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const featured = products.filter((p) => p.badge === 'Bestseller').slice(0, 4)
export const newArrivals = products.filter((p) => p.badge === 'New').slice(0, 4)
