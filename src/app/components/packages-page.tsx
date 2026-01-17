import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Search, ShoppingCart, ArrowLeft, Activity, Heart, FileText, Stethoscope, Brain, Baby } from 'lucide-react';

interface PackagesPageProps {
  onNavigateBack: () => void;
  onAddToCart: (item: any) => void;
}

export function PackagesPage({ onNavigateBack, onAddToCart }: PackagesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const allPackages = [
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
      description: 'Comprehensive elderly care checkup',
      icon: Heart,
    },
    {
      id: 5,
      name: 'Women Wellness Package',
      price: 1999,
      tests: 35,
      description: 'Specialized health screening for women',
      icon: Heart,
    },
    {
      id: 6,
      name: 'Cardiac Care Package',
      price: 1799,
      tests: 25,
      description: 'Complete heart health assessment',
      icon: Stethoscope,
    },
    {
      id: 7,
      name: 'Thyroid Profile Package',
      price: 899,
      tests: 12,
      description: 'Complete thyroid function tests',
      icon: Brain,
    },
    {
      id: 8,
      name: 'Pre-Pregnancy Package',
      price: 2299,
      tests: 30,
      description: 'Essential tests before pregnancy',
      icon: Baby,
    },
    {
      id: 9,
      name: 'Executive Health Checkup',
      price: 3999,
      tests: 65,
      description: 'Premium comprehensive health package',
      icon: Activity,
    },
    {
      id: 10,
      name: 'Liver Function Package',
      price: 799,
      tests: 10,
      description: 'Complete liver health assessment',
      icon: FileText,
    },
    {
      id: 11,
      name: 'Kidney Function Package',
      price: 799,
      tests: 10,
      description: 'Complete kidney health assessment',
      icon: FileText,
    },
    {
      id: 12,
      name: 'Vitamin & Mineral Package',
      price: 1599,
      tests: 18,
      description: 'Comprehensive vitamin and mineral profile',
      icon: Activity,
    },
  ];

  const filteredPackages = allPackages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onNavigateBack}
            variant="ghost"
            className="mb-4 text-[#4b2192] hover:text-[#3a1873]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="mb-4 text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
            Our Health Packages
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive health checkup packages tailored for your needs
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border-gray-200 bg-white pl-12 py-6 text-lg focus:border-[#4b2192] focus:ring-[#4b2192]"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPackages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card key={pkg.id} className="overflow-hidden rounded-xl border bg-white shadow-lg hover:shadow-xl transition-shadow">
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

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No packages found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
