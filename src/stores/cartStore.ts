import { atom, computed } from 'nanostores';
import { packages } from '@/data/packages';
import { stations } from '@/data/stations';

export interface CartItem {
  id: string;
  type: 'package' | 'station';
  title: string;
  price?: number;
}

// Estado reactivo global
export const cartItems = atom<CartItem[]>([]);

// Computed values
export const cartCount = computed(cartItems, items => items.length);
export const cartTotal = computed(cartItems, items => {
  const packageItem = items.find(item => item.type === 'package');
  return packageItem?.price || 0;
});

// Actions
export function addPackageToCart(packageId: string) {
  const pkg = packages.find(p => p.id === packageId);
  if (!pkg) return;

  // Remove existing package if any (only one package allowed)
  cartItems.set([
    {
      id: pkg.id,
      type: 'package',
      title: pkg.title,
      price: pkg.price,
    },
    ...cartItems.get().filter(item => item.type !== 'package')
  ]);

  // Persist to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartItems.get()));
  }
}

export function addStationToCart(stationId: string) {
  const station = stations.find(s => s.id === stationId);
  if (!station) return;

  // Check if station already exists
  const current = cartItems.get();
  const exists = current.some(item => item.id === stationId);
  if (exists) return;

  cartItems.set([
    ...current,
    {
      id: station.id,
      type: 'station',
      title: station.title,
    }
  ]);

  // Persist to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartItems.get()));
  }
}

export function removeFromCart(id: string) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));

  // Update localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartItems.get()));
  }
}

export function clearCart() {
  cartItems.set([]);

  // Clear localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cart');
  }
}

// Initialize from localStorage
export function initializeCart() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        cartItems.set(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading cart from localStorage', e);
      }
    }
  }
}