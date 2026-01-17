import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Search, ShoppingCart, ArrowRight, Activity, Beaker, Heart, FileText } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface LandingPageProps {
  onNavigateToCart: () => void;
  onNavigateToPackages: () => void;
  onNavigateToTests: () => void;
  cartItems: any[];
  onAddToCart: (item: any) => void;
}

export function LandingPage({ onNavigateToCart, onNavigateToPackages, onNavigateToTests, cartItems, onAddToCart }: LandingPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const packages = [
    {
      id: 1,
      name: 'Basic Health Checkup',
      price: 999,
      tests: 15,
      description: 'Essential health screening package',
      icon: Activity,
    },
    {
      id: 2,
      name: 'Comprehensive Panel',
      price: 2499,
      tests: 45,
      description: 'Complete body health analysis',
      icon: Heart,
    },
    {
      id: 3,
      name: 'Diabetes Care Package',
      price: 1499,
      tests: 20,
      description: 'Specialized diabetes monitoring',
      icon: FileText,
    },
    {
      id: 4,
      name: 'Senior Citizen Package',
      price: 2999,
      tests: 50,
      description: 'Elderly care checkup',
      icon: Heart,
    },
  ];

  const tests = [
{ id: 101, name: 'Complete Blood Count (CBC)', price: 250, category: 'Blood Test' },
    { id: 102, name: 'Lipid Profile', price: 350, category: 'Blood Test' },
    { id: 103, name: 'Thyroid Function Test', price: 450, category: 'Hormone Test' },
    { id: 104, name: 'Liver Function Test', price: 400, category: 'Blood Test' },
    { id: 105, name: 'Kidney Function Test', price: 400, category: 'Blood Test' },
    { id: 106, name: 'Vitamin D Test', price: 500, category: 'Vitamin Test' },
    { id: 107, name: 'HbA1c (Diabetes)', price: 300, category: 'Diabetes' },
    { id: 108, name: 'Blood Sugar Fasting', price: 200, category: 'Diabetes' },
  ];

  const filteredTests = tests.filter(test =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4b2192] to-[#6b3fba] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl text-white">
                Your Health, Our Priority
              </h1>
              <p className="mb-8 text-lg text-white/90">
                Book lab tests and health checkup packages from the comfort of your home. 
                Fast, reliable, and affordable diagnostic services.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="bg-white text-[#4b2192] hover:bg-gray-100 rounded-lg text-lg px-8"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-[rgb(60,5,106)] hover:bg-white/10 rounded-lg text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1661490210991-8b38951574bc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare Professional"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Packages Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
              Top Health Packages
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive health checkup packages tailored for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.slice(0, 4).map((pkg, index) => {
              // On mobile, show only 2 packages
              if (index >= 2) {
                return (
                  <div key={pkg.id} className="sm:block hidden">
                    <Card className="overflow-hidden rounded-xl border shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F0FA]">
                          <pkg.icon className="h-6 w-6" style={{ color: '#4b2192' }} />
                        </div>
                        <h3 className="mb-2 text-xl" style={{ color: '#1a0d33' }}>
                          {pkg.name}
                        </h3>
                        <p className="mb-4 text-sm text-gray-600">{pkg.description}</p>
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">Includes {pkg.tests} tests</span>
                        </div>
                        <div className="mb-4">
                          <span className="text-3xl" style={{ color: '#4b2192' }}>
                            ₹{pkg.price}
                          </span>
                        </div>
                        <Button
                          onClick={() => onAddToCart({ ...pkg, type: 'package' })}
                          className="w-full bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </Card>
                  </div>
                );
              }
              const Icon = pkg.icon;
              return (
                <Card key={pkg.id} className="overflow-hidden rounded-xl border shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F4F0FA]">
                      <Icon className="h-6 w-6" style={{ color: '#4b2192' }} />
                    </div>
                    <h3 className="mb-2 text-xl" style={{ color: '#1a0d33' }}>
                      {pkg.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Includes {pkg.tests} tests</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl" style={{ color: '#4b2192' }}>
                        ₹{pkg.price}
                      </span>
                    </div>
                    <Button
                      onClick={() => onAddToCart({ ...pkg, type: 'package' })}
                      className="w-full bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={onNavigateToPackages}
              size="lg"
              variant="outline"
              className="border-[#4b2192] text-[#4b2192] hover:bg-[#F4F0FA] rounded-lg"
            >
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Section 1 */}
      <section className="py-12 bg-gradient-to-r from-[#4b2192] to-[#6b3fba]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div className="text-white">
              <h2 className="mb-4 text-3xl md:text-4xl text-white">
                Special Offer: 25% Off
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Get 25% discount on all comprehensive health packages. Limited time offer!
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#4b2192] hover:bg-gray-100 rounded-lg"
              >
                Claim Offer
              </Button>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1661578363152-fdcf2b3f1307?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Health Discount"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Available Tests Section */}
      <section className="py-16" style={{ backgroundColor: '#F4F0FA' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
              Available Lab Tests
            </h2>
            <p className="text-lg text-gray-600">
              Browse our comprehensive range of individual lab tests
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for tests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border-gray-200 bg-white pl-12 py-6 text-lg focus:border-[#4b2192] focus:ring-[#4b2192]"
              />
            </div>
          </div>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTests.slice(0, 6).map((test, index) => {
              // On mobile, show only 3 tests
              if (index >= 3) {
                return (
                  <div key={test.id} className="sm:block hidden">
                    <Card className="overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="inline-block rounded-full bg-[#F4F0FA] px-3 py-1 text-xs" style={{ color: '#4b2192' }}>
                            {test.category}
                          </span>
                          <Beaker className="h-5 w-5 text-gray-400" />
                        </div>
                        <h3 className="mb-3 text-lg" style={{ color: '#1a0d33' }}>
                          {test.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl" style={{ color: '#4b2192' }}>
                            ₹{test.price}
                          </span>
                          <Button
                            onClick={() => onAddToCart({ ...test, type: 'test' })}
                            size="sm"
                            className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                          >
                            <ShoppingCart className="mr-1 h-4 w-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              }
              return (
                <Card key={test.id} className="overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="inline-block rounded-full bg-[#F4F0FA] px-3 py-1 text-xs" style={{ color: '#4b2192' }}>
                        {test.category}
                      </span>
                      <Beaker className="h-5 w-5 text-gray-400" />
                    </div>
                    <h3 className="mb-3 text-lg" style={{ color: '#1a0d33' }}>
                      {test.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" style={{ color: '#4b2192' }}>
                        ₹{test.price}
                      </span>
                      <Button
                        onClick={() => onAddToCart({ ...test, type: 'test' })}
                        size="sm"
                        className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                      >
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="mt-8 text-center">
            <Button
              onClick={onNavigateToTests}
              size="lg"
              variant="outline"
              className="border-[#4b2192] text-[#4b2192] hover:bg-white rounded-lg"
            >
              View All Tests
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Section 2 */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759215524566-8aea4761a926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRpcHN8ZW58MXx8fHwxNzY4NjIzNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wellness Tips"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
                Health Tips & Wellness
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Stay informed with our expert health tips and wellness guides. 
                Subscribe to our newsletter for weekly health insights.
              </p>
              <Button 
                size="lg" 
                className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart Button */}
      {cartItems.length > 0 && (
        <button
          onClick={onNavigateToCart}
          className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow"
          style={{ backgroundColor: '#4b2192' }}
        >
          <ShoppingCart className="h-6 w-6 text-white" />
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartItems.length}
          </span>
        </button>
      )}
    </div>
  );
}