import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface HeaderProps {
  cartItemCount: number;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  user: SupabaseUser | null;
  onSignOut: () => void;
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onSearchChange, 
  onCartClick,
  user, 
  onSignOut, 
  onAuthClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-400">EliteStore</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#products" className="hover:text-emerald-400 transition-colors">Products</a>
            <a href="#categories" className="hover:text-emerald-400 transition-colors">Categories</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400 w-64"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <User className="h-6 w-6" />
                  <span className="hidden md:block text-sm">{user.email}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-48 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm text-gray-600 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        onSignOut();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={onAuthClick}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <User className="h-6 w-6" />
              </button>
            )}
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="hover:text-emerald-400 transition-colors py-2">Home</a>
                <a href="#products" className="hover:text-emerald-400 transition-colors py-2">Products</a>
                <a href="#categories" className="hover:text-emerald-400 transition-colors py-2">Categories</a>
                <a href="#about" className="hover:text-emerald-400 transition-colors py-2">About</a>
                <a href="#contact" className="hover:text-emerald-400 transition-colors py-2">Contact</a>
              </nav>
              
              {user ? (
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-300 mb-2">{user.email}</p>
                  <button
                    onClick={onSignOut}
                    className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-700">
                  <button
                    onClick={onAuthClick}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Sign In / Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;