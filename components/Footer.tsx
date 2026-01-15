import Link from 'next/link';
import { Calculator, Mail, MapPin } from 'lucide-react';

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
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-blue-400" size={32} />
              <div>
                <h3 className="text-white text-xl font-bold">Asphalt Calculator</h3>
                <p className="text-sm text-gray-400">Free Paving Cost Estimator</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Calculate asphalt material, tonnage, and costs for your paving project.
              Get accurate estimates for driveways, parking lots, and roads with our
              free online calculator tools.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Serving contractors and homeowners nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@asphaltcalculator.com" className="hover:text-white transition-colors">
                  info@asphaltcalculator.com
                </a>
              </div>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="text-white font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Asphalt Calculator. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400">
            <strong className="text-gray-300">Disclaimer:</strong> The calculations provided by this asphalt calculator
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
