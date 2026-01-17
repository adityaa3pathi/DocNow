import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Search, ShoppingCart, ArrowLeft, Beaker } from 'lucide-react';

interface TestsPageProps {
  onNavigateBack: () => void;
  onAddToCart: (item: any) => void;
}

export function TestsPage({ onNavigateBack, onAddToCart }: TestsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allTests = [
    { id: 101, name: 'Complete Blood Count (CBC)', price: 250, category: 'Blood Test' },
    { id: 102, name: 'Lipid Profile', price: 350, category: 'Blood Test' },
    { id: 103, name: 'Thyroid Function Test', price: 450, category: 'Hormone Test' },
    { id: 104, name: 'Liver Function Test', price: 400, category: 'Blood Test' },
    { id: 105, name: 'Kidney Function Test', price: 400, category: 'Blood Test' },
    { id: 106, name: 'Vitamin D Test', price: 500, category: 'Vitamin Test' },
    { id: 107, name: 'HbA1c (Diabetes)', price: 300, category: 'Diabetes' },
    { id: 108, name: 'Blood Sugar Fasting', price: 200, category: 'Diabetes' },
    { id: 109, name: 'Blood Sugar PP', price: 200, category: 'Diabetes' },
    { id: 110, name: 'Vitamin B12', price: 450, category: 'Vitamin Test' },
    { id: 111, name: 'Iron Studies', price: 600, category: 'Blood Test' },
    { id: 112, name: 'Calcium Test', price: 250, category: 'Mineral Test' },
    { id: 113, name: 'Magnesium Test', price: 300, category: 'Mineral Test' },
    { id: 114, name: 'PSA Test', price: 700, category: 'Cancer Screening' },
    { id: 115, name: 'TSH Test', price: 350, category: 'Hormone Test' },
    { id: 116, name: 'T3 Test', price: 300, category: 'Hormone Test' },
    { id: 117, name: 'T4 Test', price: 300, category: 'Hormone Test' },
    { id: 118, name: 'Uric Acid Test', price: 250, category: 'Blood Test' },
    { id: 119, name: 'Creatinine Test', price: 200, category: 'Blood Test' },
    { id: 120, name: 'Urea Test', price: 200, category: 'Blood Test' },
    { id: 121, name: 'Testosterone Test', price: 600, category: 'Hormone Test' },
    { id: 122, name: 'Estrogen Test', price: 600, category: 'Hormone Test' },
    { id: 123, name: 'Cortisol Test', price: 550, category: 'Hormone Test' },
    { id: 124, name: 'CEA Test', price: 800, category: 'Cancer Screening' },
  ];

  const categories = ['All', ...Array.from(new Set(allTests.map(test => test.category)))];

  const filteredTests = allTests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Our Lab Tests
          </h1>
          <p className="text-lg text-gray-600">
            Browse our comprehensive range of individual lab tests
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 mx-auto max-w-2xl">
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

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-[#4b2192] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#F4F0FA] border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTests.map((test) => (
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
          ))}
        </div>

        {/* No Results */}
        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No tests found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
