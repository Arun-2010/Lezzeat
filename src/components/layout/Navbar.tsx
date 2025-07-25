import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  ShoppingCart, 
  User, 
  LogOut, 
  Settings, 
  History, 
  ChefHat,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  const handleLogout = () => {
    logout();
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'menu': return 'Menu';
      case 'cart': return 'Cart';
      case 'orders': return 'My Orders';
      case 'admin': return 'Admin Dashboard';
      default: return 'Canteen';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-destructive text-destructive-foreground';
      case 'faculty': return 'bg-gradient-primary text-primary-foreground';
      case 'student': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <nav className="bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('menu')}
              className="flex items-center space-x-2 text-xl font-bold text-primary"
            >
              <ChefHat className="h-6 w-6" />
              <span>College Canteen</span>
            </button>
            
            <div className="hidden md:flex space-x-4">
              <Button
                variant={currentPage === 'menu' ? 'default' : 'ghost'}
                onClick={() => onNavigate('menu')}
              >
                Menu
              </Button>
              <Button
                variant={currentPage === 'orders' ? 'default' : 'ghost'}
                onClick={() => onNavigate('orders')}
              >
                My Orders
              </Button>
              {user?.role === 'admin' && (
                <Button
                  variant={currentPage === 'admin' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('admin')}
                  className="text-primary"
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              )}
            </div>
          </div>

          {/* Right side - Cart and User menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant={currentPage === 'cart' ? 'default' : 'outline'}
              onClick={() => onNavigate('cart')}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 px-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <div className="hidden md:flex flex-col items-start">
                      <span className="text-sm font-medium">{user?.name}</span>
                      <Badge className={`text-xs px-1 py-0 ${getRoleColor(user?.role || '')}`}>
                        {user?.role?.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                  {user?.studentId && (
                    <p className="text-xs text-muted-foreground">ID: {user.studentId}</p>
                  )}
                  {user?.facultyId && (
                    <p className="text-xs text-muted-foreground">ID: {user.facultyId}</p>
                  )}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate('orders')}>
                  <History className="mr-2 h-4 w-4" />
                  Order History
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border">
        <div className="px-4 py-2 flex justify-around">
          <Button
            variant={currentPage === 'menu' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('menu')}
          >
            Menu
          </Button>
          <Button
            variant={currentPage === 'orders' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onNavigate('orders')}
          >
            Orders
          </Button>
          {user?.role === 'admin' && (
            <Button
              variant={currentPage === 'admin' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('admin')}
            >
              Admin
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};