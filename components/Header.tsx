'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cost Calculator', href: '/cost-calculator' },
    { name: 'Comparison', href: '/asphalt-vs-concrete' },
    { name: 'Tonnage', href: '/tonnage-calculator' },
    { name: 'Guide', href: '/guide' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all overflow-hidden">
               <Image 
                 src="/logo.png" 
                 alt="Asphalt Calculator Logo" 
                 width={40} 
                 height={40} 
                 className="w-10 h-10 object-cover"
               />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">Asphalt</span>
              <span className="text-sm font-medium text-blue-600 tracking-wide">Calculator</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all px-4 py-2 rounded-full text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/"
              className="ml-4 bg-gray-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20 hover:shadow-blue-600/20 font-semibold text-sm transform hover:-translate-y-0.5"
            >
              <Calculator size={16} />
              Calculate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 transition-all rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all text-center flex items-center justify-center gap-2 mt-2 font-semibold shadow-lg shadow-blue-600/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calculator size={18} />
              Calculate Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
