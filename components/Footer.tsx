import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    calculators: [
      { name: 'Asphalt Calculator', href: '/' },
      { name: 'Cost Calculator', href: '/cost-calculator' },
      { name: 'Tonnage Calculator', href: '/tonnage-calculator' },
      { name: 'Asphalt vs Concrete', href: '/asphalt-vs-concrete' },
    ],
    resources: [
      { name: 'Paving Guide', href: '/guide' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Thickness Guidelines', href: '/guide#thickness' },
      { name: 'Cost Factors', href: '/guide#cost-factors' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative rounded-xl shadow-lg shadow-blue-900/50 overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Asphalt Calculator Logo" 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold tracking-tight" style={{ color: 'white' }}>Asphalt Calculator</h3>
                <p className="text-sm text-blue-400 font-medium">Free Paving Estimator</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Professional tools for calculating asphalt material, tonnage, and costs.
              Designed for contractors, homeowners, and project managers.
            </p>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin size={18} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="group-hover:text-white transition-colors">Serving contractors nationwide</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail size={18} className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="mailto:support@asphalt-calculator.net" className="hover:text-white transition-colors flex items-center gap-1">
                  support@asphalt-calculator.net
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Calculators</h4>
            <ul className="space-y-3">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Asphalt Calculator. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
