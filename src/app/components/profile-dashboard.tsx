import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  User,
  Users,
  ShoppingBag,
  CheckCircle,
  XCircle,
  Plus,
  Edit2,
  ArrowLeft,
  Package,
  Calendar,
  FileText,
} from 'lucide-react';

interface ProfileDashboardProps {
  onNavigateBack: () => void;
}

export function ProfileDashboard({ onNavigateBack }: ProfileDashboardProps) {
  const [activeTab, setActiveTab] = useState<'account' | 'family' | 'orders' | 'completed' | 'cancelled'>('account');

  const sidebarItems = [
    { id: 'account', label: 'Account Details', icon: User },
    { id: 'family', label: 'Family Members', icon: Users },
    { id: 'orders', label: 'My Orders', icon: ShoppingBag },
    { id: 'completed', label: 'Completed Orders', icon: CheckCircle },
    { id: 'cancelled', label: 'Cancelled Orders', icon: XCircle },
  ];

  const familyMembers = [
    { id: 1, name: 'John Doe', relation: 'Self', age: 35, gender: 'Male' },
    { id: 2, name: 'Jane Doe', relation: 'Spouse', age: 32, gender: 'Female' },
    { id: 3, name: 'Emily Doe', relation: 'Daughter', age: 8, gender: 'Female' },
  ];

  const orders = [
    {
      id: 'ORD001',
      date: '2026-01-15',
      items: ['Complete Blood Count', 'Lipid Profile'],
      status: 'In Progress',
      total: 600,
    },
    {
      id: 'ORD002',
      date: '2026-01-10',
      items: ['Basic Health Checkup Package'],
      status: 'Sample Collected',
      total: 999,
    },
  ];

  const completedOrders = [
    {
      id: 'ORD003',
      date: '2025-12-20',
      items: ['Thyroid Function Test'],
      total: 450,
      reportUrl: '#',
    },
    {
      id: 'ORD004',
      date: '2025-12-10',
      items: ['Comprehensive Panel Package'],
      total: 2499,
      reportUrl: '#',
    },
  ];

  const cancelledOrders = [
    {
      id: 'ORD005',
      date: '2025-11-25',
      items: ['Vitamin D Test'],
      total: 500,
      reason: 'Changed mind',
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div>
            <h2 className="mb-6 text-2xl" style={{ color: '#1a0d33' }}>
              Account Details
            </h2>
            <Card className="rounded-xl p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      className="mt-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className="mt-2 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="mt-2 rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="mt-2 rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    defaultValue="123 Health St, Medical City"
                    className="mt-2 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      defaultValue="35"
                      className="mt-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      defaultValue="Male"
                      className="mt-2 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <Input
                      id="bloodGroup"
                      defaultValue="O+"
                      className="mt-2 rounded-lg"
                    />
                  </div>
                </div>

                <Button className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg">
                  Save Changes
                </Button>
              </form>
            </Card>
          </div>
        );

      case 'family':
        return (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl" style={{ color: '#1a0d33' }}>
                Family Members
              </h2>
              <Button className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg">
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {familyMembers.map((member) => (
                <Card key={member.id} className="rounded-xl p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F0FA]">
                      <User className="h-6 w-6" style={{ color: '#4b2192' }} />
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#4b2192]">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="mb-2 text-lg" style={{ color: '#1a0d33' }}>
                    {member.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Relation: {member.relation}</p>
                    <p>Age: {member.age} years</p>
                    <p>Gender: {member.gender}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'orders':
        return (
          <div>
            <h2 className="mb-6 text-2xl" style={{ color: '#1a0d33' }}>
              My Orders
            </h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <Package className="h-5 w-5" style={{ color: '#4b2192' }} />
                        <span className="text-lg" style={{ color: '#1a0d33' }}>
                          Order #{order.id}
                        </span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items:</p>
                        <ul className="mt-1 space-y-1">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                          {order.status}
                        </span>
                        <span className="text-lg" style={{ color: '#4b2192' }}>
                          ₹{order.total}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#4b2192] text-[#4b2192] hover:bg-[#F4F0FA] rounded-lg"
                    >
                      Track Order
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'completed':
        return (
          <div>
            <h2 className="mb-6 text-2xl" style={{ color: '#1a0d33' }}>
              Completed Orders
            </h2>
            <div className="space-y-4">
              {completedOrders.map((order) => (
                <Card key={order.id} className="rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-lg" style={{ color: '#1a0d33' }}>
                          Order #{order.id}
                        </span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items:</p>
                        <ul className="mt-1 space-y-1">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="text-lg" style={{ color: '#4b2192' }}>
                        ₹{order.total}
                      </span>
                    </div>
                    <Button
                      className="bg-[#4b2192] hover:bg-[#3a1873] text-white rounded-lg"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Report
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'cancelled':
        return (
          <div>
            <h2 className="mb-6 text-2xl" style={{ color: '#1a0d33' }}>
              Cancelled Orders
            </h2>
            <div className="space-y-4">
              {cancelledOrders.map((order) => (
                <Card key={order.id} className="rounded-xl p-6 bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-lg" style={{ color: '#1a0d33' }}>
                          Order #{order.id}
                        </span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items:</p>
                        <ul className="mt-1 space-y-1">
                          {order.items.map((item, index) => (
                            <li key={index} className="text-sm text-gray-500">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                          Reason: {order.reason}
                        </span>
                        <span className="text-lg text-gray-500">
                          ₹{order.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
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
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl" style={{ color: '#1a0d33' }}>
            My Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="rounded-xl p-4">
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-[#4b2192] text-white'
                          : 'text-gray-700 hover:bg-[#F4F0FA]'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}