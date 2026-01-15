'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cost Calculator', href: '/cost-calculator' },
    { name: 'Comparison', href: '/asphalt-vs-concrete' },
    { name: 'Tonnage', href: '/tonnage-calculator' },
    { name: 'Guide', href: '/guide' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Asphalt Calculator Logo"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight">Asphalt Calculator</span>
              <span className="text-xs text-blue-600 font-medium">Free Paving Estimator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all px-4 py-2 rounded-lg text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 ml-2 shadow-md hover:shadow-lg font-semibold text-sm"
            >
              <Calculator size={18} />
              Calculate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 transition-all rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-center flex items-center justify-center gap-2 mt-2 shadow-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calculator size={18} />
                Calculate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
