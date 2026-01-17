import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useState } from 'react';

interface NavbarProps {
  onSignIn?: () => void;
  onNavigateToPackages?: () => void;
  onNavigateToTests?: () => void;
  onNavigateBack: () => void;
}

export function Navbar({ onSignIn, onNavigateToPackages, onNavigateToTests, onNavigateBack }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <button
            className="text-2xl font-bold" style={{ color: '#4b2192' }}
            onClick={onNavigateBack}
              >
              
          DOCNOW
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onNavigateToPackages}
            className="text-gray-700 hover:text-[#4b2192] transition-colors"
          >
            Our Packages
          </button>
          <button
            onClick={onNavigateToTests}
            className="text-gray-700 hover:text-[#4b2192] transition-colors"
          >
            Our Tests
          </button>
        </div>

        {/* Search Bar */}
        <div className="mx-8 hidden flex-1 max-w-xl lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for tests, packages..."
              className="w-full rounded-lg border-gray-200 bg-gray-50 pl-10 focus:border-[#4b2192] focus:ring-[#4b2192]"
            />
          </div>
        </div>

        {/* Desktop Sign In Button */}
        <Button
          onClick={onSignIn}
          className="hidden md:flex bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
        >
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="ghost"
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border-gray-200 bg-gray-50 pl-10"
              />
            </div>

            {/* Mobile Navigation Links */}
            <button
              onClick={() => {
                onNavigateToPackages?.();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#4b2192]"
            >
              Our Packages
            </button>
            <button
              onClick={() => {
                onNavigateToTests?.();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#4b2192]"
            >
              Our Tests
            </button>

            {/* Mobile Sign In Button */}
            <Button
              onClick={() => {
                onSignIn?.();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}