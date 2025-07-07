import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">EliteStore</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for quality products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for updates and exclusive offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 EliteStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;