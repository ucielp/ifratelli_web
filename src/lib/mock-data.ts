import { Product, EventFair, FAQItem, User } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Rosario Sunlit Cowrie Necklace',
    price: 24.00,
    category: 'Necklaces',
    demographic: ['Women', 'Teens'],
    image: '/items/item-01.jpeg',
    description: 'Inspired by Caro’s earliest creations in Rosario in 1998. Features authentic natural cowrie shells paired with 18k gold-plated brass accents on a braided flax cord.',
    materials: ['Natural Cowrie Shells', '18k Gold-Plated Brass', 'Braided Flax Cord'],
    isFeatured: true,
    isNew: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-02',
    name: 'El Masnou Woven Wood Bracelet',
    price: 16.00,
    category: 'Bracelets',
    demographic: ['Men', 'Women'],
    image: '/items/item-02.jpeg',
    description: 'Handcrafted in our El Masnou workshop. Carved olive wood beads threaded along a durable waxed cotton cord with an antiqued silver charm.',
    materials: ['Olive Wood Beads', 'Waxed Cotton Cord', 'Antiqued Silver Charm'],
    isFeatured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-03',
    name: 'Mallorca Breeze Drop Earrings',
    price: 14.00,
    category: 'Earrings',
    demographic: ['Women'],
    image: '/items/item-03.jpeg',
    description: 'Lightweight and luminous drop earrings that catch the Mediterranean sun. Freshwater pearls suspended from gold-plated hooks with raw ceramic bead details.',
    materials: ['Freshwater Pearls', 'Gold-Plated Hooks', 'Raw Ceramic Beads'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-04',
    name: 'Soller Coastal Anklet',
    price: 12.00,
    category: 'Anklets',
    demographic: ['Women', 'Teens'],
    image: '/items/item-04.jpeg',
    description: 'The quintessential summer piece for Mallorca walks. Polished turquoise sea stones and coconut shell washers tied with an adjustable hemp knot.',
    materials: ['Turquoise Sea Stones', 'Polished Coconut Shells', 'Adjustable Hemp Knot'],
    isNew: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-05',
    name: 'Valldemossa Artisanal Eyeglass Holder',
    price: 18.00,
    category: 'Eyeglass holders',
    demographic: ['Women', 'Men'],
    image: '/items/item-05.jpeg',
    description: 'Keep your reading or sunglasses secure with effortless Spanish style. Lightweight tortoiseshell acrylic links finished with gold lobster clasps.',
    materials: ['Tortoiseshell Acrylic Links', 'Gold Lobster Clasps', 'Organic Silicone Loops'],
    isFeatured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-06',
    name: 'Palma Golden Fish Charm Bracelet',
    price: 22.00,
    category: 'Bracelets',
    demographic: ['Women', 'Teens'],
    image: '/items/item-06.jpeg',
    description: 'Celebrating our iconic fish motif. A delicate elastic bracelet adorned with 24k gold-plated fish charms and shimmering natural mother of pearl.',
    materials: ['24k Gold-Plated Fish Charms', 'Natural Mother of Pearl', 'Elastic Polymer Cord'],
    isFeatured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-07',
    name: 'Little Artisan Rainbow Necklace',
    price: 10.00,
    category: 'Necklaces',
    demographic: ['Kids'],
    image: '/items/item-07.jpeg',
    description: 'Designed specifically for younger jewelry lovers! Vibrant, non-toxic hand-painted wood beads on a soft nylon cord with a child-safe magnetic clasp.',
    materials: ['Hand-Painted Wood Beads', 'Durable Nylon Cord', 'Safe Magnetic Clasp'],
    isNew: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-08',
    name: 'Cala Major Braided Anklet',
    price: 11.00,
    category: 'Anklets',
    demographic: ['Teens', 'Men', 'Women'],
    image: '/items/item-08.jpeg',
    description: 'Unisex beach anklet made from hand-twisted linen thread and matte glass beads. Comfortable enough to wear into the ocean every day.',
    materials: ['Hand-Twisted Linen', 'Matte Glass Beads', 'Pewter End Caps'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 'prod-09',
    name: 'Serra de Tramuntana Wood Necklace',
    price: 28.00,
    category: 'Necklaces',
    demographic: ['Men', 'Women'],
    image: '/items/item-09.jpeg',
    description: 'A bold, organic statement piece inspired by the mountains of Mallorca. Features carved sandalwood and volcanic lava rock on burnished leather.',
    materials: ['Carved Sandalwood', 'Volcanic Lava Rock', 'Burnished Leather'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-10',
    name: 'Port de Soller Pearl Earrings',
    price: 19.00,
    category: 'Earrings',
    demographic: ['Women'],
    image: '/items/item-10.jpeg',
    description: 'Timeless baroque pearls paired with hammered brass arches. Each pair is unique due to the organic formation of the real freshwater pearls.',
    materials: ['Baroque Pearls', '18k Gold Vermeil', 'Hammered Brass'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-11',
    name: 'Caro & María 1998 Heritage Bracelet',
    price: 26.00,
    category: 'Bracelets',
    demographic: ['Women'],
    image: '/items/item-11.jpeg',
    description: 'A tribute piece celebrating over 25 years of sisterhood and craft. Woven linen wrap incorporating solid gold accent beads and miniature charm medallions.',
    materials: ['Linen Wrap', 'Solid Gold Accent Beads', 'Miniature Charm Medallions'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-12',
    name: 'Teens Sunset Boho Eyeglass Chain',
    price: 15.00,
    category: 'Eyeglass holders',
    demographic: ['Teens', 'Women'],
    image: '/items/item-12.jpeg',
    description: 'Add bohemian flair to any sunglasses or reading specs. Soft pastel seed beads strung on flexible rose gold wire with adjustable silicone grips.',
    materials: ['Pastel Seed Beads', 'Rose Gold Wire', 'Silicone Grips'],
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-13',
    name: 'Little Skipper Shell Bracelet',
    price: 8.50,
    category: 'Bracelets',
    demographic: ['Kids'],
    image: '/items/item-13.jpeg',
    description: 'A cheerful, lightweight stretchy bracelet for children featuring smooth sea glass pebbles and tiny beach-combed cowrie shells.',
    materials: ['Smooth Beach Glass', 'Mini Cowrie Shells', 'Stretchy Cord'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-14',
    name: 'Mediterranean Goddess Statement Necklace',
    price: 30.00,
    category: 'Necklaces',
    demographic: ['Women'],
    image: '/items/item-14.jpeg',
    description: 'Our flagship creation. Chunky olive wood links harmonize with a sun-etched gold medallion, tied gracefully with a raw natural silk ribbon.',
    materials: ['Chunky Olive Wood', 'Gold-Plated Medallion', 'Natural Silk Ribbon'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  }
];

export const MOCK_FAIRS: EventFair[] = [
  {
    id: 'fair-01',
    title: 'Mercado Artesanal de El Masnou',
    location: 'Passeig Marítim, Front to Marina',
    city: 'El Masnou',
    dateStr: '2026-08-01',
    timeStr: '10:00 - 21:00',
    description: 'Join Caro and María at our iconic weekend coastal stall. Test out our newest autumn linen wrap bracelets and exclusive shell pieces.',
    booth: 'Stall #14 (Under the Bamboo Pergola)',
    featured: true
  },
  {
    id: 'fair-02',
    title: 'Fira d\'Estiu de Port de Sóller',
    location: 'Plaza del Puerto, Sóller',
    city: 'Mallorca',
    dateStr: '2026-08-15',
    timeStr: '17:00 - 23:30',
    description: 'An evening sunset market overlooking the Mallorca harbor. Enjoy live acoustic guitars while exploring our 1998 Heritage Collection.',
    booth: 'Artisan Row B, Stand 8',
    featured: true
  },
  {
    id: 'fair-03',
    title: 'Barcelona Born Design Pop-Up',
    location: 'Carrer de Montcada, El Born',
    city: 'Barcelona',
    dateStr: '2026-08-29',
    timeStr: '11:00 - 20:00',
    description: 'Special weekend pop-up in the historic Born district. We will be bringing our full collection of necklaces, eyeglass holders, and anklets.',
    booth: 'Main Hall, Table 3'
  },
  {
    id: 'fair-04',
    title: 'Mercat de l\'Artania de Palma',
    location: 'Parc de la Mar (Cathedral View)',
    city: 'Mallorca',
    dateStr: '2026-09-12',
    timeStr: '10:00 - 22:00',
    description: 'Our largest fair of the season in Palma de Mallorca. Come meet the founders and enjoy custom sizing on all bracelets and anklets on the spot.',
    booth: 'Central Tent #1',
    featured: true
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the free shipping threshold work?',
    answer: 'We offer automatically triggered FREE shipping on all orders over €60! For carts under €60, a flat base shipping fee of €4.50 is applied at checkout. We proudly deliver across the Barcelona area, El Masnou, Mallorca, and mainland Spain.',
    category: 'shipping'
  },
  {
    id: 'faq-2',
    question: 'Where can I meet Caro and María in person at a local fair?',
    answer: 'We love meeting our customers! Check out our "Fairs & Events" calendar on the homepage for exact dates and stall numbers in El Masnou, Palma de Mallorca, and Barcelona. You can even choose "Ready for Pickup at Fair" at checkout!',
    category: 'fairs'
  },
  {
    id: 'faq-3',
    question: 'What materials do you use, and are they water-resistant?',
    answer: 'We use high-quality raw materials including natural cowrie shells, Mallorca olive wood, freshwater pearls, and 18k/24k gold-plated brass. While our hemp and glass anklets love the ocean, we recommend removing wood and gold-plated pieces before swimming or showering to preserve their warm luster.',
    category: 'materials'
  },
  {
    id: 'faq-4',
    question: 'Can I request custom sizes for bracelets or anklets?',
    answer: 'Absolutely! Since every piece is handcrafted by Caro and María in our workshops, simply add a note during checkout or message us on WhatsApp with your exact wrist or ankle measurements, and we will tailor it at no extra cost.',
    category: 'custom'
  },
  {
    id: 'faq-5',
    question: 'What is the story behind the name "ifratelli"?',
    answer: 'Founded in Rosario, Argentina in 1998, "ifratelli" means siblings/brothers. It honors the enduring bond between sisters Caro (who started at age 15) and María (who started at age 8), carrying forward the artisan heritage taught by their mother.',
    category: 'custom'
  }
];

export const MOCK_USER: User = {
  id: 'usr-1998',
  name: 'Familia ifratelli',
  email: 'caro.maria@ifratelli.es',
  phone: '+34 600 199 800',
  addresses: [
    {
      id: 'addr-1',
      label: 'El Masnou Home',
      street: 'Carrer de la Mar 24, 2º B',
      city: 'El Masnou, Barcelona',
      postalCode: '08320',
      region: 'Barcelona Area'
    },
    {
      id: 'addr-2',
      label: 'Mallorca Summer Cottage',
      street: 'Cami de Sóller 12',
      city: 'Sóller, Mallorca',
      postalCode: '07100',
      region: 'Mallorca'
    }
  ],
  orders: [
    {
      id: 'ORD-1998-01',
      date: '2026-07-20',
      total: 46.00,
      shippingFee: 4.50,
      status: 'Delivered',
      address: {
        id: 'addr-1',
        label: 'El Masnou Home',
        street: 'Carrer de la Mar 24, 2º B',
        city: 'El Masnou, Barcelona',
        postalCode: '08320',
        region: 'Barcelona Area'
      },
      items: [
        {
          product: MOCK_PRODUCTS[0],
          quantity: 1
        },
        {
          product: MOCK_PRODUCTS[5],
          quantity: 1
        }
      ]
    }
  ]
};
