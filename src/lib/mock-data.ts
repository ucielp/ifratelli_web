import { Product, EventFair, FAQItem, User } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Cowrie Shell Necklace',
    price: 24.00,
    category: 'Necklaces',
    demographic: ['Women', 'Teens'],
    image: '/items/item-01.jpeg',
    description: 'Made with natural cowrie shells and gold-plated brass beads on a braided flax cord. Simple, durable, and great for everyday wear.',
    materials: ['Natural Cowrie Shells', 'Gold-Plated Brass', 'Braided Flax Cord'],
    isFeatured: true,
    isNew: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-02',
    name: 'Wood & Cotton Bracelet',
    price: 16.00,
    category: 'Bracelets',
    demographic: ['Men', 'Women'],
    image: '/items/item-02.jpeg',
    description: 'Carved olive wood beads on a tough waxed cotton cord. Lightweight and comfortable for daily wear.',
    materials: ['Olive Wood Beads', 'Waxed Cotton Cord', 'Silver Charm'],
    isFeatured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-03',
    name: 'Pearl Drop Earrings',
    price: 14.00,
    category: 'Earrings',
    demographic: ['Women'],
    image: '/items/item-03.jpeg',
    description: 'Real freshwater pearls and small ceramic beads on gold-plated hooks. Light and easy to wear all day.',
    materials: ['Freshwater Pearls', 'Gold-Plated Hooks', 'Ceramic Beads'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-04',
    name: 'Turquoise Stone Anklet',
    price: 12.00,
    category: 'Anklets',
    demographic: ['Women', 'Teens'],
    image: '/items/item-04.jpeg',
    description: 'Polished turquoise stones and coconut shell beads on an adjustable hemp cord. Perfect for summer days at the beach.',
    materials: ['Turquoise Stones', 'Coconut Shells', 'Adjustable Hemp Knot'],
    isNew: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-05',
    name: 'Tortoiseshell Eyeglass Chain',
    price: 18.00,
    category: 'Eyeglass holders',
    demographic: ['Women', 'Men'],
    image: '/items/item-05.jpeg',
    description: 'Lightweight tortoiseshell acrylic links with secure silicone loops. Keeps your reading glasses or sunglasses handy.',
    materials: ['Tortoiseshell Acrylic Links', 'Gold Clasp', 'Silicone Loops'],
    isFeatured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-06',
    name: 'Gold Fish Charm Bracelet',
    price: 22.00,
    category: 'Bracelets',
    demographic: ['Women', 'Teens'],
    image: '/items/item-06.jpeg',
    description: 'Stretchy bracelet with gold-plated fish charms and mother of pearl beads. Easy to slip on and off.',
    materials: ['Gold-Plated Fish Charms', 'Mother of Pearl', 'Elastic Cord'],
    isFeatured: true,
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-07',
    name: 'Kids Rainbow Wood Necklace',
    price: 10.00,
    category: 'Necklaces',
    demographic: ['Kids'],
    image: '/items/item-07.jpeg',
    description: 'Colorful painted wood beads on a soft cord with a safe magnetic clasp. Fun and durable for kids.',
    materials: ['Painted Wood Beads', 'Nylon Cord', 'Magnetic Clasp'],
    isNew: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-08',
    name: 'Glass Bead Beach Anklet',
    price: 11.00,
    category: 'Anklets',
    demographic: ['Teens', 'Men', 'Women'],
    image: '/items/item-08.jpeg',
    description: 'Matte glass beads woven into twisted linen thread. Comfortable enough to wear in the water.',
    materials: ['Twisted Linen Thread', 'Matte Glass Beads', 'Pewter Caps'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 'prod-09',
    name: 'Wood & Lava Rock Necklace',
    price: 28.00,
    category: 'Necklaces',
    demographic: ['Men', 'Women'],
    image: '/items/item-09.jpeg',
    description: 'Carved sandalwood and black lava rock beads on a leather cord. A sturdy, natural everyday piece.',
    materials: ['Carved Sandalwood', 'Lava Rock Beads', 'Leather Cord'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-10',
    name: 'Baroque Pearl Arch Earrings',
    price: 19.00,
    category: 'Earrings',
    demographic: ['Women'],
    image: '/items/item-10.jpeg',
    description: 'Natural baroque pearls hanging from hammered brass arches. Each pearl has its own unique shape.',
    materials: ['Baroque Pearls', 'Gold Vermeil', 'Hammered Brass'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-11',
    name: 'Linen & Gold Wrap Bracelet',
    price: 26.00,
    category: 'Bracelets',
    demographic: ['Women'],
    image: '/items/item-11.jpeg',
    description: 'Woven linen wrap with small gold-plated accent beads and little charm medallions. Soft and comfortable on the wrist.',
    materials: ['Woven Linen Wrap', 'Gold Accent Beads', 'Charm Medallions'],
    isFeatured: true,
    inStock: true,
    rating: 5.0
  },
  {
    id: 'prod-12',
    name: 'Beaded Eyeglass Chain',
    price: 15.00,
    category: 'Eyeglass holders',
    demographic: ['Teens', 'Women'],
    image: '/items/item-12.jpeg',
    description: 'Pastel seed beads on flexible wire with adjustable silicone end grips. Works with any glasses or sunglasses.',
    materials: ['Pastel Seed Beads', 'Rose Gold Wire', 'Silicone Grips'],
    inStock: true,
    rating: 4.7
  },
  {
    id: 'prod-13',
    name: 'Kids Sea Glass Bracelet',
    price: 8.50,
    category: 'Bracelets',
    demographic: ['Kids'],
    image: '/items/item-13.jpeg',
    description: 'Stretchy bracelet made with smooth sea glass pebbles and tiny cowrie shells. Lightweight and easy for kids to wear.',
    materials: ['Smooth Sea Glass', 'Mini Cowrie Shells', 'Stretchy Cord'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-14',
    name: 'Wood Link Ribbon Necklace',
    price: 30.00,
    category: 'Necklaces',
    demographic: ['Women'],
    image: '/items/item-14.jpeg',
    description: 'Chunky olive wood links and a gold-plated medallion on a natural silk ribbon cord. Easy to adjust the length.',
    materials: ['Chunky Olive Wood', 'Gold-Plated Medallion', 'Silk Ribbon Cord'],
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
    description: 'Come see us at our weekend market stall. We will have our newest linen wrap bracelets and shell necklaces.',
    booth: 'Stall #14',
    featured: true
  },
  {
    id: 'fair-02',
    title: 'Fira d\'Estiu de Port de Sóller',
    location: 'Plaza del Puerto, Sóller',
    city: 'Mallorca',
    dateStr: '2026-08-15',
    timeStr: '17:00 - 23:30',
    description: 'Evening market at the harbor in Sóller. Stop by to see our handmade necklaces, bracelets, and earrings.',
    booth: 'Stand 8',
    featured: true
  },
  {
    id: 'fair-03',
    title: 'Barcelona Born Design Pop-Up',
    location: 'Carrer de Montcada, El Born',
    city: 'Barcelona',
    dateStr: '2026-08-29',
    timeStr: '11:00 - 20:00',
    description: 'Weekend market stall in El Born. We will have our full selection of necklaces, eyeglass chains, and anklets.',
    booth: 'Table 3'
  },
  {
    id: 'fair-04',
    title: 'Mercat de l\'Artania de Palma',
    location: 'Parc de la Mar',
    city: 'Mallorca',
    dateStr: '2026-09-12',
    timeStr: '10:00 - 22:00',
    description: 'Our main autumn stall in Palma. Stop by to get custom sizing on bracelets and anklets made on the spot.',
    booth: 'Tent #1',
    featured: true
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does free shipping work?',
    answer: 'We offer free shipping on all orders over €60. For orders under €60, shipping is €4.50. We ship anywhere in mainland Spain, Barcelona, El Masnou, and Mallorca.',
    category: 'shipping'
  },
  {
    id: 'faq-2',
    question: 'Where can I meet Caro and María at a fair?',
    answer: 'We sell at local fairs and markets in El Masnou, Palma de Mallorca, and Barcelona. Check out our Fairs page to see exact dates and stall locations. You can also pick up online orders at any fair for free.',
    category: 'fairs'
  },
  {
    id: 'faq-3',
    question: 'What materials do you use and can I wear them in water?',
    answer: 'We use natural cowrie shells, olive wood, freshwater pearls, and gold-plated brass. Glass and hemp pieces can be worn in the water, but we recommend taking off wood and gold-plated jewelry before swimming or showering.',
    category: 'materials'
  },
  {
    id: 'faq-4',
    question: 'Can I request custom sizes for bracelets or anklets?',
    answer: 'Yes! Since we make every piece ourselves, just leave a note at checkout or send us a WhatsApp message with your measurements, and we will adjust the size for free.',
    category: 'custom'
  },
  {
    id: 'faq-5',
    question: 'What does "ifratelli" mean?',
    answer: 'We are sisters Caro and María, and we started making jewelry together in Rosario, Argentina in 1998. "ifratelli" means siblings or brothers, celebrating our bond and family roots.',
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
