import { useState } from 'react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { LandingPage } from '@/app/components/landing-page';
import { CartPage } from '@/app/components/cart-page';
import { ProfileDashboard } from '@/app/components/profile-dashboard';
import { PackagesPage } from '@/app/components/packages-page';
import { TestsPage } from '@/app/components/tests-page';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: 'package' | 'test';
}

type Page = 'home' | 'cart' | 'profile' | 'packages' | 'tests';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSignIn = () => {
    setCurrentPage('profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onSignIn={handleSignIn}
        onNavigateToPackages={() => setCurrentPage('packages')}
        onNavigateToTests={() => setCurrentPage('tests')}
      />
      
      <main className="flex-1">
        {currentPage === 'home' && (
          <LandingPage
            onNavigateToCart={() => setCurrentPage('cart')}
            onNavigateToPackages={() => setCurrentPage('packages')}
            onNavigateToTests={() => setCurrentPage('tests')}
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
          />
        )}
        
        {currentPage === 'packages' && (
          <PackagesPage
            onNavigateBack={() => setCurrentPage('home')}
            onAddToCart={handleAddToCart}
          />
        )}
        
        {currentPage === 'tests' && (
          <TestsPage
            onNavigateBack={() => setCurrentPage('home')}
            onAddToCart={handleAddToCart}
          />
        )}
        
        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigateBack={() => setCurrentPage('home')}
          />
        )}
        
        {currentPage === 'profile' && (
          <ProfileDashboard onNavigateBack={() => setCurrentPage('home')} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
