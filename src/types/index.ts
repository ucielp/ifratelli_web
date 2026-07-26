export type ProductCategory = 
  | 'All' 
  | 'Necklaces' 
  | 'Bracelets' 
  | 'Earrings' 
  | 'Anklets' 
  | 'Eyeglass holders';

export type Demographic = 
  | 'All' 
  | 'Women' 
  | 'Men' 
  | 'Teens' 
  | 'Kids';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  demographic: Demographic[];
  image: string;
  description: string;
  materials: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  inStock: boolean;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserAddress {
  id: string;
  label: string;
  street: string;
  city: string;
  postalCode: string;
  region: 'Barcelona Area' | 'Mallorca' | 'Other Spain/EU';
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  shippingFee: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Ready for Pickup at Fair';
  address: UserAddress;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  addresses: UserAddress[];
  orders: Order[];
}

export interface EventFair {
  id: string;
  title: string;
  location: string;
  city: 'Mallorca' | 'El Masnou' | 'Barcelona';
  dateStr: string; // YYYY-MM-DD for clean local date parsing
  timeStr: string;
  description: string;
  booth?: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'shipping' | 'materials' | 'fairs' | 'custom';
}
