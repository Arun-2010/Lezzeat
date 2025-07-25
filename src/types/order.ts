export interface OrderItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  userId: string;
  userRole: 'student' | 'faculty';
  items: OrderItem[];
  totalAmount: number;
  dineOption: 'dine-in' | 'parcel';
  pickupTime: string;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderDate: string;
  completedAt?: string;
  estimatedReadyTime: string;
  paymentStatus: 'pending' | 'paid';
  specialInstructions?: string;
}

export interface CartItem extends OrderItem {
  image: string;
  isSpecial: boolean;
}