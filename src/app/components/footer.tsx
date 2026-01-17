import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4b2192]">
                <div className="text-lg text-white">+</div>
              </div>
              <span className="ml-3 text-xl" style={{ color: '#1a0d33' }}>HealthCare</span>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted partner for diagnostic and healthcare services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider" style={{ color: '#1a0d33' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider" style={{ color: '#1a0d33' }}>
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#4b2192]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider" style={{ color: '#1a0d33' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="mr-2 h-4 w-4" style={{ color: '#4b2192' }} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="mr-2 h-4 w-4" style={{ color: '#4b2192' }} />
                info@healthcare.com
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4" style={{ color: '#4b2192' }} />
                123 Health St, Medical City
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              © 2026 HealthCare. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-[#4b2192]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4b2192]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4b2192]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4b2192]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
