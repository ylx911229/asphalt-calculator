import Link from 'next/link';
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-24 border-t-4 border-blue-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calculator className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Asphalt Calculator</h3>
                <p className="text-sm text-blue-400 font-medium">Free Paving Cost Estimator</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Calculate asphalt material, tonnage, and costs for your paving project.
              Get accurate estimates for driveways, parking lots, and roads with our
              free online calculator tools.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin size={16} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="group-hover:text-white transition-colors">Serving contractors and homeowners nationwide</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail size={16} className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="mailto:info@asphalt-calculator.net" className="hover:text-white transition-colors flex items-center gap-1">
                  info@asphalt-calculator.net
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg border-b border-gray-700 pb-2">Calculators</h4>
            <ul className="space-y-3">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg border-b border-gray-700 pb-2">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Asphalt Calculator. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300 font-semibold">Disclaimer:</strong> The calculations provided by this asphalt calculator
            are estimates based on standard industry values and should be used for planning purposes only.
            Actual material requirements and costs may vary based on site conditions, local prices, asphalt mix design,
            compaction rates, and other factors. Always consult with professional paving contractors for accurate
            project quotes and specifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
