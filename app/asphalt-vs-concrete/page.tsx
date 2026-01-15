import type { Metadata } from 'next';
import { Scale, DollarSign, Calendar, Wrench, TrendingUp } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.comparison.title,
  description: pageSEO.comparison.description,
  keywords: pageSEO.comparison.keywords,
};

export default function ComparisonPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asphalt vs Concrete Driveway Cost Calculator
            </h1>
            <p className="text-xl text-purple-100">
              Compare costs, benefits, and long-term value of asphalt versus concrete for your driveway project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cost Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Asphalt Driveway</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span>Initial Cost</span>
                    <span className="text-2xl font-bold">$3-7/sq ft</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span>Lifespan</span>
                    <span className="text-xl font-semibold">15-20 years</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span>Maintenance</span>
                    <span className="text-xl font-semibold">Every 2-3 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>20-Year Total</span>
                    <span className="text-2xl font-bold text-green-400">$5-10/sq ft</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 text-gray-900 rounded-xl p-8 border-2 border-gray-300">
                <h3 className="text-2xl font-bold mb-6">Concrete Driveway</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span>Initial Cost</span>
                    <span className="text-2xl font-bold">$4-10/sq ft</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span>Lifespan</span>
                    <span className="text-xl font-semibold">25-30 years</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span>Maintenance</span>
                    <span className="text-xl font-semibold">Every 5-10 years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>20-Year Total</span>
                    <span className="text-2xl font-bold text-blue-600">$5-12/sq ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When comparing asphalt vs concrete driveway costs, the initial installation price is just one factor to
                consider. Our asphalt vs concrete driveway cost calculator helps you understand both upfront and long-term
                expenses. Asphalt typically costs $3-7 per square foot installed, while concrete costs $4-10 per square foot.
                However, maintenance requirements and lifespan significantly impact total ownership costs over time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Asphalt driveways require more frequent maintenance, including seal coating every 2-3 years at $0.15-0.25
                per square foot. Concrete driveways need less maintenance but may require sealing every 5-10 years. Over a
                20-year period, total costs for asphalt and concrete become more comparable when factoring in maintenance.
                The asphalt vs concrete cost calculator accounts for these long-term expenses to provide accurate comparisons.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pros and Cons Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Asphalt Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Lower initial installation cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Faster installation (1-2 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Better for cold climates (flexible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Easier and cheaper repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Can be driven on in 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Recyclable material</span>
                  </li>
                </ul>
                <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Asphalt Disadvantages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Requires regular seal coating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Shorter lifespan (15-20 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Can soften in extreme heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Limited color options (black/dark gray)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Concrete Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Longer lifespan (25-30 years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Less frequent maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Better for hot climates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">More design options (stamped, colored)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Higher resale value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Resistant to oil stains</span>
                  </li>
                </ul>
                <h4 className="text-xl font-bold text-gray-900 mt-6 mb-4">Concrete Disadvantages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Higher initial cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Longer installation time (3-7 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">Can crack in freeze-thaw cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span className="text-gray-700">More expensive repairs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
