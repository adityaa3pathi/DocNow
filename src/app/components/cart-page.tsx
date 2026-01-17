import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Minus, Plus, Trash2, ArrowLeft, Tag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: 'package' | 'test';
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onNavigateBack: () => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigateBack }: CartPageProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    // Mock coupon validation
    if (couponCode.toUpperCase() === 'HEALTH25') {
      setAppliedCoupon({ code: couponCode, discount: 25 });
    } else if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: couponCode, discount: 10 });
    } else {
      alert('Invalid coupon code');
    }
  };

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
            Continue Shopping
          </Button>
          <h1 className="text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
            Your Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <Card className="p-12 text-center rounded-xl">
                <p className="text-lg text-gray-600">Your cart is empty</p>
                <Button
                  onClick={onNavigateBack}
                  className="mt-4 bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                >
                  Browse Tests & Packages
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden rounded-xl shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="inline-block rounded-full bg-[#F4F0FA] px-3 py-1 text-xs" style={{ color: '#4b2192' }}>
                              {item.type === 'package' ? 'Package' : 'Test'}
                            </span>
                          </div>
                          <h3 className="mb-2 text-lg" style={{ color: '#1a0d33' }}>
                            {item.name}
                          </h3>
                          <p className="text-2xl" style={{ color: '#4b2192' }}>
                            ₹{item.price}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="h-8 w-8 rounded-lg border-gray-300"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-lg border-gray-300"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Item Total:</span>
                          <span className="text-lg" style={{ color: '#4b2192' }}>
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Price Summary Sidebar */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="sticky top-24 rounded-xl shadow-lg">
                <div className="p-6">
                  <h2 className="mb-6 text-xl" style={{ color: '#1a0d33' }}>
                    Price Summary
                  </h2>

                  {/* Coupon Input */}
                  <div className="mb-6">
                    <label className="mb-2 block text-sm text-gray-600">
                      Have a coupon code?
                    </label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 rounded-lg border-gray-300"
                      />
                      <Button
                        onClick={handleApplyCoupon}
                        className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                      >
                        Apply
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <div className="mt-2 flex items-center text-sm text-green-600">
                        <Tag className="mr-1 h-4 w-4" />
                        Coupon "{appliedCoupon.code}" applied - {appliedCoupon.discount}% off
                      </div>
                    )}
                    <div className="mt-2 text-xs text-gray-500">
                      Try: HEALTH25 or SAVE10
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({appliedCoupon.discount}%)</span>
                        <span>-₹{discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg">
                        <span style={{ color: '#1a0d33' }}>Total</span>
                        <span className="text-2xl" style={{ color: '#4b2192' }}>
                          ₹{total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    className="mt-6 w-full bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg py-6 text-lg"
                  >
                    Proceed to Checkout
                  </Button>

                  {/* Additional Info */}
                  <div className="mt-4 space-y-2 text-xs text-gray-500">
                    <p>✓ Free home sample collection</p>
                    <p>✓ Reports within 24-48 hours</p>
                    <p>✓ 100% Safe & Hygienic</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}