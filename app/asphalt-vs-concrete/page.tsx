import type { Metadata } from 'next';
import { Scale, CheckCircle, XCircle } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.comparison.title,
  description: pageSEO.comparison.description,
  keywords: pageSEO.comparison.keywords,
};

export default function ComparisonPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 md:py-24 relative overflow-hidden">
         {/* Abstract shapes */}
         <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-purple-400/30 text-purple-100 text-sm font-medium mb-6">
              <Scale size={16} />
              <span>Driveway Material Comparison</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Asphalt vs Concrete <br/> Driveway Cost Calculator
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Compare costs, benefits, and long-term value of asphalt versus concrete for your driveway project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Cost Comparison Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Asphalt Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                    Asphalt
                    <span className="text-sm font-normal bg-slate-800 px-3 py-1 rounded-full text-slate-300">Most Popular</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-slate-300">Initial Cost</span>
                      <span className="text-2xl font-bold text-white">$3-7 <span className="text-sm font-normal text-slate-400">/sq ft</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-slate-300">Lifespan</span>
                      <span className="text-xl font-semibold text-white">15-20 years</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-slate-300">Maintenance</span>
                      <span className="text-xl font-semibold text-amber-400">Every 2-3 years</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 font-medium">20-Year Total Estimate</span>
                        <span className="text-3xl font-bold text-green-400">$5-10 <span className="text-sm font-normal text-slate-400">/sq ft</span></span>
                      </div>
                      <p className="text-xs text-slate-400 text-right">Includes maintenance costs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concrete Card */}
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -mr-8 -mt-8 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    Concrete
                    <span className="text-sm font-normal bg-slate-100 px-3 py-1 rounded-full text-slate-600">Long Lasting</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-slate-500">Initial Cost</span>
                      <span className="text-2xl font-bold">$4-10 <span className="text-sm font-normal text-slate-400">/sq ft</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-slate-500">Lifespan</span>
                      <span className="text-xl font-semibold">25-30+ years</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <span className="text-slate-500">Maintenance</span>
                      <span className="text-xl font-semibold text-green-600">Every 5-10 years</span>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-700 font-medium">20-Year Total Estimate</span>
                        <span className="text-3xl font-bold text-blue-600">$5-12 <span className="text-sm font-normal text-slate-400">/sq ft</span></span>
                      </div>
                      <p className="text-xs text-slate-400 text-right">Includes maintenance costs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 mb-16 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Verdict</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                When comparing asphalt vs concrete driveway costs, the initial installation price is just one factor to
                consider. Our asphalt vs concrete driveway cost calculator helps you understand both upfront and long-term
                expenses. Asphalt typically costs $3-7 per square foot installed, while concrete costs $4-10 per square foot.
                However, maintenance requirements and lifespan significantly impact total ownership costs over time.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Asphalt driveways require more frequent maintenance, including seal coating every 2-3 years at $0.15-0.25
                per square foot. Concrete driveways need less maintenance but may require sealing every 5-10 years. Over a
                20-year period, total costs for asphalt and concrete become more comparable when factoring in maintenance.
                The asphalt vs concrete cost calculator accounts for these long-term expenses to provide accurate comparisons.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pros and Cons Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-slate-800 rounded-full"></span>
                  Asphalt Advantages
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Lower initial installation cost (30-40% cheaper)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Can be resurfaced easily and inexpensively</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Better in cold climates (flexes with freeze/thaw)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Dark color melts snow faster in winter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Ready to use sooner (usually 1-2 days)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-slate-300 rounded-full"></span>
                  Concrete Advantages
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Longer lifespan (30+ years vs 20 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Lower maintenance requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Better in hot climates (doesn't soften)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">More decorative options (stamped, colored)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Increases property value more significantly</span>
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
