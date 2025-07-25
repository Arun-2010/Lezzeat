import { MenuItem, MenuCategory } from '@/types/menu';
import { Order } from '@/types/order';

export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with fresh vegetables and aromatic spices',
    price: 120,
    category: 'Rice & Biryani',
    image: '/placeholder.svg',
    isSpecial: true,
    isVegetarian: true,
    isVegan: false,
    isAvailable: true,
    rating: 4.5,
    ratingCount: 128,
    preparationTime: 15,
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Spices', 'Ghee'],
    nutritionalInfo: {
      calories: 350,
      protein: 8,
      carbs: 65,
      fat: 12
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Creamy tomato-based curry with soft paneer cubes',
    price: 150,
    category: 'Main Course',
    image: '/placeholder.svg',
    isSpecial: false,
    isVegetarian: true,
    isVegan: false,
    isAvailable: true,
    rating: 4.7,
    ratingCount: 95,
    preparationTime: 12,
    ingredients: ['Paneer', 'Tomatoes', 'Cream', 'Spices'],
    nutritionalInfo: {
      calories: 280,
      protein: 15,
      carbs: 12,
      fat: 22
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Masala Dosa',
    description: 'Crispy South Indian crepe filled with spiced potato mixture',
    price: 80,
    category: 'South Indian',
    image: '/placeholder.svg',
    isSpecial: true,
    isVegetarian: true,
    isVegan: true,
    isAvailable: true,
    rating: 4.6,
    ratingCount: 156,
    preparationTime: 10,
    ingredients: ['Rice Batter', 'Lentil Batter', 'Potatoes', 'Onions', 'Spices'],
    nutritionalInfo: {
      calories: 240,
      protein: 6,
      carbs: 45,
      fat: 8
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Chicken Curry',
    description: 'Traditional spicy chicken curry with rich gravy',
    price: 180,
    category: 'Main Course',
    image: '/placeholder.svg',
    isSpecial: false,
    isVegetarian: false,
    isVegan: false,
    isAvailable: true,
    rating: 4.4,
    ratingCount: 87,
    preparationTime: 20,
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 320,
      protein: 28,
      carbs: 8,
      fat: 18
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Samosa (2 pcs)',
    description: 'Crispy fried pastry filled with spiced potatoes and peas',
    price: 40,
    category: 'Snacks',
    image: '/placeholder.svg',
    isSpecial: false,
    isVegetarian: true,
    isVegan: true,
    isAvailable: true,
    rating: 4.2,
    ratingCount: 203,
    preparationTime: 5,
    ingredients: ['Flour', 'Potatoes', 'Peas', 'Spices', 'Oil'],
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbs: 25,
      fat: 8
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink with sweet mango pulp',
    price: 60,
    category: 'Beverages',
    image: '/placeholder.svg',
    isSpecial: false,
    isVegetarian: true,
    isVegan: false,
    isAvailable: true,
    rating: 4.3,
    ratingCount: 89,
    preparationTime: 3,
    ingredients: ['Yogurt', 'Mango Pulp', 'Sugar', 'Cardamom'],
    nutritionalInfo: {
      calories: 150,
      protein: 6,
      carbs: 28,
      fat: 3
    },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const mockCategories: MenuCategory[] = [
  {
    id: '1',
    name: 'Rice & Biryani',
    description: 'Fragrant rice dishes and biryanis',
    items: mockMenuItems.filter(item => item.category === 'Rice & Biryani')
  },
  {
    id: '2',
    name: 'Main Course',
    description: 'Hearty main dishes for a complete meal',
    items: mockMenuItems.filter(item => item.category === 'Main Course')
  },
  {
    id: '3',
    name: 'South Indian',
    description: 'Authentic South Indian delicacies',
    items: mockMenuItems.filter(item => item.category === 'South Indian')
  },
  {
    id: '4',
    name: 'Snacks',
    description: 'Quick bites and appetizers',
    items: mockMenuItems.filter(item => item.category === 'Snacks')
  },
  {
    id: '5',
    name: 'Beverages',
    description: 'Refreshing drinks and beverages',
    items: mockMenuItems.filter(item => item.category === 'Beverages')
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    userId: '1',
    userRole: 'faculty',
    items: [
      {
        menuItemId: '1',
        name: 'Vegetable Biryani',
        price: 120,
        quantity: 1
      },
      {
        menuItemId: '6',
        name: 'Mango Lassi',
        price: 60,
        quantity: 1
      }
    ],
    totalAmount: 180,
    dineOption: 'dine-in',
    pickupTime: '13:30',
    status: 'preparing',
    orderDate: '2024-01-20T12:30:00Z',
    estimatedReadyTime: '13:15',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD002',
    userId: '2',
    userRole: 'student',
    items: [
      {
        menuItemId: '3',
        name: 'Masala Dosa',
        price: 80,
        quantity: 2
      }
    ],
    totalAmount: 160,
    dineOption: 'parcel',
    pickupTime: '14:00',
    status: 'pending',
    orderDate: '2024-01-20T13:00:00Z',
    estimatedReadyTime: '13:45',
    paymentStatus: 'paid'
  }
];

export const mockAnalytics = {
  topItems: [
    { name: 'Masala Dosa', orders: 156, revenue: 12480 },
    { name: 'Vegetable Biryani', orders: 128, revenue: 15360 },
    { name: 'Paneer Butter Masala', orders: 95, revenue: 14250 },
    { name: 'Mango Lassi', orders: 89, revenue: 5340 },
    { name: 'Chicken Curry', orders: 87, revenue: 15660 }
  ],
  dailyOrders: 45,
  weeklyOrders: 312,
  dailySales: 6750,
  weeklySales: 47250
};